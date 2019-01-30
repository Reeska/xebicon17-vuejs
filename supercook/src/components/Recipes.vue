<template>
  <div>
    <div class="title">
      <h2>Liste des recettes </h2>
      <span>favorites: {{countFavorites}}</span>
    </div>
    <recipe :data="recipe" v-for="recipe in recipes" :key="recipe.uid"></recipe>
  </div>
</template>

<script>
  import Recipe from './Recipe.vue';
  import recipesService from '../services/recipes-services';

  export default {
    name: 'recipes',
    data() {
      return {
        recipes: [],
      };
    },
    created() {
      recipesService.getRecipes()
        .then(recipes => {
          this.recipes = recipes;
        });
    },
    computed: {
      countFavorites() {
        return this.recipes.filter(r => r.favorite).length;
      },
    },
    components: {
      Recipe,
    },
  };
</script>

<style scoped>

</style>
