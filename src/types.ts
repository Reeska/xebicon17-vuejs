export interface Recipe {
  uid: string
  nom: string
  type: string
  cuisson: number
  histoire: string
  img_big: string
  img_small: string
  ingredients: Ingredient[]
}

export interface Ingredient {
  label: string
}
