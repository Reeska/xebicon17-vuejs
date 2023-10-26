<template>
  <div class="recipe">
    <h3>
      <router-link :to="{ 'name': 'recipe', params: { uid : data.uid }}">{{ data.nom }}</router-link>
    </h3>
    <div class="details">
      <div class="info">
        <img :src="data.img_small"/>
        <div>Durée : {{ data.cuisson }} minutes</div>
      </div>
      <div class="story">
        <p class="description">{{ data.histoire }}</p>
        <Star class="favorite" @onChange="onFavorite" :favorite="isFavorite" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import recipesService from '../services/recipes-services';
import Star from './Star.vue';

const { data } = defineProps({ data: Object });

const emit = defineEmits(['onFavorite']);

const isFavorite = ref(false)

const onFavorite = async (favorite) => {
  console.log('onFavorite', favorite);
  if (favorite) {
    recipesService.addFavorite(data);
  } else {
    recipesService.removeFavorite(data);
  }

  loadFavorite()
  emit('onFavorite');
};

const loadFavorite = () => {
  isFavorite.value = recipesService.getFavorites().includes(data.uid)
}

loadFavorite()
</script>

<style scoped lang="scss">
.recipe {
  background: #eee;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 8px 13px 0 #aeadad;

  .details {
    display: flex;

    .info {
      text-align: center;
      margin-right: 10px;

      img {
        width: 160px;
      }
    }

    .story {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: justify;

      .description {
        flex: 1;
        margin: 0;
      }

      .favorite {
        align-self: flex-end;
      }
    }
  }
}
</style>
