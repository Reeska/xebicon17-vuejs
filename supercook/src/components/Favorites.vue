<template>
  <div class="hello">
    <h2>Mes Favoris</h2>

    <recipe :data="recipe" v-for="recipe in favorites" :key="recipe.uid"></recipe>
  </div>
</template>

<script>
  import recipesService from '../services/recipes-services'
  import Recipe from './Recipe.vue'

  export default {
    name: 'hello',
    data () {
      return {
        favorites: [],
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created () {
      this.favorites = recipesService.findFavorites()
    },
    components: {Recipe}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
