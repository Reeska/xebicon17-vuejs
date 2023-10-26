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
import { useFetch } from '@/hooks/useFetch';
import recipesService from '../services/recipes-services';
import Recipe from './Recipe.vue';

const props = defineProps({ uid: String });

const { data: recipe, error } = useFetch(() => recipesService.getRecipe(props.uid))
</script>
