<template>
  <div class="recipe">
    <h3>
      <router-link :to="`/recipes/${data.uid}`">{{ data.nom }}</router-link>
    </h3>
    <div class="details">
      <div class="info">
        <img :src="data.img_small" :alt="data.nom" />
        <div>Durée : {{ data.cuisson }} minutes</div>
      </div>
      <div class="story">
        <p class="description">{{ data.histoire }}</p>
        <Star class="favorite" @onChange="onFavorite" :favorite="isFavorite" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import recipesService from '@/services/recipes-services'
import Star from '@/components/Star.vue'
import type { Recipe } from '@/types'

const props = defineProps<{ data: Recipe }>()
const emit = defineEmits(['onFavorite'])

const isFavorite = ref(false)

const onFavorite = async (favorite) => {
  if (favorite) {
    recipesService.addFavorite(props.data)
  } else {
    recipesService.removeFavorite(props.data)
  }

  fetchFavoriteFlag()
  emit('onFavorite')
}

const fetchFavoriteFlag = () => {
  isFavorite.value = recipesService.getFavorites().includes(props.data.uid)
}

fetchFavoriteFlag()
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
