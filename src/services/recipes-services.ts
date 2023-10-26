import type { Recipe } from '@/types';

let favorites: Recipe[] = JSON.parse(window.localStorage.getItem('favorites')) || [];
let localRecipes: Recipe[] = [];

function getFavorites (): Recipe['uid'][] {
  return favorites;
}

async function findFavorites (): Promise<Recipe[]> {
  const recipes = await getRecipes();
  return recipes.filter(recipe => favorites.includes(recipe.uid));
}

function addFavorite (recipe: Pick<Recipe, 'uid'>): void {
  favorites.push(recipe.uid);
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
}

function removeFavorite (recipe: Pick<Recipe, 'uid'>): void {
  const newFavorites = favorites.filter(favorite => favorite !== recipe.uid);
  window.localStorage.setItem('favorites', JSON.stringify(newFavorites));
  favorites = JSON.parse(window.localStorage.getItem('favorites'));
}

function getRecipes (): Promise<Recipe[]> {
  return window
    .fetch('https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes')
    .then(response => response.json())
    .then(recipes => [ ...recipes, ...localRecipes ]);
}

function getRecipe (uid): Promise<Recipe> {
  const localRecipe = localRecipes.find(recipe => recipe.uid === uid);

  if (localRecipe) {
    return localRecipe;
  }

  return window
    .fetch(`https://bhvb4ch330.execute-api.eu-west-1.amazonaws.com/dev/recipes/${uid}`)
    .then(response => response.json()) as Recipe;
}

function addRecipe (recipe): void {
  recipe.uid = uid();
  localRecipes.push(recipe);
}

function uid (): string {
  return Math.floor((1 + Math.random()) * 0x100000000)
    .toString(16);
}

export default {
  getFavorites,
  getRecipes,
  getRecipe,
  addFavorite,
  removeFavorite,
  findFavorites,
  addRecipe
};
