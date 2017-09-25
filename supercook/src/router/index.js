import Vue from 'vue'
import Router from 'vue-router'
import Recipes from '../components/Recipes'
import Favorites from '../components/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: Recipes,
      alias: '/recipes'
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})
