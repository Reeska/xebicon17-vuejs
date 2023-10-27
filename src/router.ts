import { createRouter, createWebHistory } from 'vue-router';
import Recipes from './pages/Recipes.vue';
import RecipeFull from './pages/RecipeFull.vue';
import Favorites from './pages/Favorites.vue';
import AddRecipe from './pages/AddRecipe.vue';

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
