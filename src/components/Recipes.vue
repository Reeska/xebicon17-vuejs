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
import { useFetch } from '@/hooks/useFetch';
import { computed } from 'vue';
import recipesService from '../services/recipes-services';
import Recipe from './Recipe.vue';

const { data: recipes, error } = useFetch(recipesService.getRecipes)

const countFavorites = computed(() => {
  return recipes.value?.filter(recipe => recipe.favorite).length ?? 0
})
</script>

<style scoped>

</style>
