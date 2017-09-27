<template>
  <div class="recipe">
    <h3>
      <router-link :to="{ 'name': 'recipe', params: { uid : data.uid }}">{{ data.nom }}</router-link>
    </h3>
    <div class="details">
      <div class="info">
        <img :src="data.img_small"/>
        <div>Durée : {{ data.cuisson }}</div>
      </div>
      <p class="description">{{ data.histoire }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recipe',
    props: ['data']
  }
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
        width: 160px;
        text-align: center;
      }

      .description {
        flex: 1;
        margin: 0;
      }
    }
  }
</style>
