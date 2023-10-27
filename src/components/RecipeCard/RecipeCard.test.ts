import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import userEvent from '@testing-library/user-event'
import recipeService from '@/services/recipes-services'

const RouterLinkComponent = {
  props: {
    to: { type: String, default: '' }
  },
  template: '<a :href="to"><slot /></a>'
}

const recipe = {
  uid: '134EDFRET57UHGHU8ZETF',
  nom: 'Bûche de Noël',
  type: 'Végétarien',
  cuisson: 30,
  ingredients: [
    {
      label: '30 g fécule de pomme de terre'
    },
    {
      label: '30 g farine'
    }
  ],
  histoire: 'Lorem ipsum',
  img_small: 'https://img_small',
  img_big: 'https://img_big'
}

it('should display recipe card', () => {
  // GIVEN
  render(RecipeCard, {
    props: {
      data: recipe
    },
    components: {
      RouterLink: RouterLinkComponent
    }
  })

  // THEN
  expect(screen.getByRole('heading', { name: recipe.nom })).toBeVisible()
  expect(screen.getByRole('link', { name: recipe.nom })).toHaveAttribute(
    'href',
    '/recipes/134EDFRET57UHGHU8ZETF'
  )
  expect(screen.getByRole('img')).toHaveAttribute('src', recipe.img_small)
  expect(screen.getByText('Durée : 30 minutes')).toBeVisible()
  expect(screen.getByText('Lorem ipsum')).toBeVisible()
  expect(screen.getByRole('checkbox')).not.toBeChecked()
})

it('should add current recipe to favorite when user clicks star button', async () => {
  // GIVEN
  render(RecipeCard, {
    props: {
      data: recipe
    },
    components: {
      RouterLink: RouterLinkComponent
    }
  })

  // WHEN
  await userEvent.click(screen.getByRole('checkbox'))

  // THEN
  expect(screen.getByRole('checkbox')).toBeChecked()
  expect(recipeService.getFavorites()).toContainEqual(recipe.uid)
})
