<template>
  <div>
    <div class="title">
      <h2>Liste des recettes</h2>
      <span>favorites: {{ countFavorites }}</span>
    </div>
    <span v-if="error">Erreur du chargement des recettes</span>
    <Recipe
      v-else-if="recipes"
      :data="recipe"
      v-for="recipe in recipes"
      :key="recipe.uid"
      @onFavorite="fetchFavoritesCount"
    />
    <span v-else>Chargement...</span>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/hooks/useFetch'
import { ref, watchEffect } from "vue";
import recipesService from '../services/recipes-services'
import Recipe from '@/components/RecipeCard/RecipeCard.vue'

const { data: recipes, error } = useFetch(recipesService.getRecipes)
const countFavorites = ref(0)

const fetchFavoritesCount = () => {
  const favorites = recipesService.getFavorites()
  countFavorites.value =
    recipes.value?.filter((recipe) => favorites.includes(recipe.uid)).length ?? 0
}

watchEffect(() => fetchFavoritesCount())
</script>

<style scoped></style>
