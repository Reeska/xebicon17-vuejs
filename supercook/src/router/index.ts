import { createRouter, createWebHistory } from 'vue-router';
import Recipes from '../components/Recipes.vue';
import RecipeFull from '../components/RecipeFull.vue';
import Favorites from '../components/Favorites.vue';
import AddRecipe from '../components/AddRecipe.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
      alias: '/',
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipe,
    },
    {
      path: '/recipes/:uid',
      name: 'recipe',
      component: RecipeFull,
      props: true,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
    },
  ],
});
