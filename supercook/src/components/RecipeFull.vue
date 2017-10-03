<template>
  <div class="recipe-full" v-if="recipe">
    <h2>Recette</h2>

    <Recipe :data="recipe"></Recipe>
    <div>
      <h4>Ingrédients</h4>

      <ul>
        <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Recipe from './Recipe.vue'
  import recipesService from '../services/recipes-services'

  export default {
    name: 'recipe',
    props: ['uid'],
    data () {
      return {
        recipe: {}
      }
    },
    created () {
      recipesService.getRecipe(this.uid)
        .then(recipe => {
          this.recipe = recipe[0]
        })
    },
    components: {
      Recipe
    }
  }
</script>

<style scoped lang="scss">
  .recipe-full {

  }
</style>
