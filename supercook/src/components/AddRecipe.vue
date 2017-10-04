<template>
  <div>
    <div class="title">
      <h2>Ajout d'une recette</h2>
    </div>

    <form>
      <fieldset>
        Nom : <input type="text" v-model="recipe.nom"/>
      </fieldset>

      <fieldset>
        Durée : <input type="number" v-model.number="recipe.cuisson"/> minutes
      </fieldset>

      <fieldset>
        Image : <input type="text" v-model="recipe.img_small"/>
      </fieldset>

      <fieldset>
        Description : <textarea></textarea>
      </fieldset>

      <div>
        <h3>Liste des ingrédients</h3>
        <ul>
          <li v-for="ingredient in recipe.ingredients">
            <input v-model="ingredient.name" /> ({{ ingredient }})
          </li>
          <li @click="addIngredient()">Ajouter un ingrédient</li>
        </ul>
      </div>

      <div>
        <button type="button" @click="save()">
          Enregistrer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'addRecipe',
    data () {
      return {
        recipe: {
          nom: '',
          cuisson: 0,
          img_small: '',
          ingredients: []
        }
      }
    },
    methods: {
      addIngredient () {
        this.recipe.ingredients.push({
          name: ''
        })
      },
      save () {
        console.log('save', this.recipe)
      }
    }
  }
</script>
