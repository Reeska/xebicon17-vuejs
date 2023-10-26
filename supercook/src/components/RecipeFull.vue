<template>
  <span v-if="error">Erreur lors du chargement de la recette</span>
  <div class="recipe-full" v-else-if="recipe">
    <h2>Recette</h2>

    <Recipe :data="recipe" />
    <div>
      <h4>Ingrédients</h4>

      <ul>
        <li v-for="ingredient in recipe.ingredients">{{ ingredient.label }}</li>
      </ul>
    </div>
  </div>
  <span v-else>Chargement...</span>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import Recipe from './Recipe.vue';
import recipesService from '../services/recipes-services';

const { uid } = defineProps({ uid: String });
const recipe = ref(null)
const error = ref(false)

watchEffect(async () => {
  error.value = false
  try {
    recipe.value = await recipesService.getRecipe(uid)
  } catch {
    error.value = true
  }
})
</script>
