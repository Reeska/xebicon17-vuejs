<template>
  <div>
    <div class="title">
      <h2>Ajout d'une recette</h2>
    </div>

    <form>
      <fieldset>
        <label>Type</label>
        <select v-model="recipe.type">
          <option selected="selected" value="">-</option>
          <option v-for="type in types" :value="type">{{ type }}</option>
        </select>
      </fieldset>

      <fieldset>
        <label>Nom</label> <input type="text" v-model="recipe.nom"/>
      </fieldset>

      <fieldset>
        <label>Durée</label> <input type="number" v-model.number="recipe.cuisson"/> minutes
      </fieldset>

      <fieldset>
        <label>Image</label> <input type="text" v-model="recipe.img_small"/>
      </fieldset>

      <fieldset>
        <label>Description</label> <textarea v-model="recipe.histoire"></textarea>
      </fieldset>

      <div>
        <h3>Liste des ingrédients</h3>
        <ul>
          <li v-for="ingredient in recipe.ingredients">
            <input v-model="ingredient.label"/>
          </li>
          <li>
            <button type="button" @click="addIngredient()">Ajouter un ingrédient</button>
          </li>
        </ul>
      </div>

      <div>
        <button type="button" @click="save()">
          Enregistrer
        </button>

        <span v-if="success" class="success">Recette ajoutée avec succès</span>
      </div>
    </form>
  </div>
</template>

<script setup>
import recipesServices from '@/services/recipes-services';
import { ref } from 'vue';

const types = [
  'Dessert',
  'Plat',
  'Entrée',
  'Boisson',
];
const emptyRecipe = {
  type: '',
  nom: '',
  histoire: '',
  cuisson: 0,
  img_small: '',
  ingredients: [],
};

const recipe = ref(emptyRecipe);
const success = ref(false);

const addIngredient = () => {
  recipe.value.ingredients.push({
    label: '',
  });
}

const save = async () => {
  recipesServices.addRecipe(recipe.value)
  success.value = true
  recipe.value = emptyRecipe

  setTimeout(() => success.value = false, 2000)
}
</script>

<style>
.success {
  color: mediumseagreen;
}
</style>
