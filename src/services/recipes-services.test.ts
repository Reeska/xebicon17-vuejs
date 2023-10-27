import { beforeEach, describe, expect, it } from 'vitest';
import recipeService from './recipes-services';

describe('addFavorite', () => {
  beforeEach(() => {
    window.localStorage.clear();
    recipeService.getFavorites().forEach((favorite) => recipeService.removeFavorite({uid: favorite}));
  });

  it('should add favorite to favorite list when its empty', () => {
    // GIVEN
    const recipe = {
      uid: 123,
    };

    // WHEN
    recipeService.addFavorite(recipe);

    // THEN
    expect(recipeService.getFavorites()).toContainEqual(recipe.uid);
    expect(window.localStorage.getItem('favorites')).toBe('[123]');
  });

  it('should add favorite to favorite list when already contains items', () => {
    // GIVEN
    const recipe1 = {
      uid: 1,
    };
    const recipe2 = {
      uid: 2,
    };

    // WHEN
    recipeService.addFavorite(recipe1);
    recipeService.addFavorite(recipe2);

    // THEN
    const favorites = recipeService.getFavorites()
    expect(favorites).toContainEqual(recipe1.uid);
    expect(favorites).toContainEqual(recipe2.uid);
    expect(window.localStorage.getItem('favorites')).toBe('[1,2]');
  });
});
