<template>
  <div>
    <div class="title">
      <h2>Liste des recettes </h2>
      <span>favorites: {{countFavorites}}</span>
    </div>
    <span v-if="error">Erreur du chargement des recettes</span>
    <Recipe v-else-if="recipes" :data="recipe" v-for="recipe in recipes" :key="recipe.uid"></Recipe>
    <span v-else>Chargement...</span>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Recipe from './Recipe.vue';
import recipesService from '../services/recipes-services';

const recipes = ref(null)
const error = ref(false)

const loadRecipes = async () => {
  error.value = false
  try {
    recipes.value = await recipesService.getRecipes()
  } catch {
    error.value = true
  }
}

const countFavorites = computed(() => {
  return recipes.value?.filter(recipe => recipe.favorite).length ?? 0
})

loadRecipes()
</script>

<style scoped>

</style>
