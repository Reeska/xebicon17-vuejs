<template>
  <div>
    <div class="title">
      <h2>Mes Favoris</h2>
      <span>favorites: {{favorites?.length ?? '...'}}</span>
    </div>

    <span v-if="error">Erreur lors du chargement des favoris.</span>
    <Recipe v-else-if="favorites" :data="recipe" v-for="recipe in favorites" :key="recipe.uid" @onFavorite="loadFavorites()" />
    <span v-else>Chargement...</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import recipesService from '../services/recipes-services';
import Recipe from './Recipe.vue';

const favorites = ref(null)
const error = ref(false)

const loadFavorites = async () => {
  error.value = false
  try {
    favorites.value = await recipesService.findFavorites()
  } catch {
    error.value = true
  }
}

loadFavorites()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
