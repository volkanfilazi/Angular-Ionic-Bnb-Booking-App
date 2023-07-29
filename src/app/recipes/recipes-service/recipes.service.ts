import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    {
      id: '5',
      title: 'Schnitzel',
      imageUrl: 'https://www.gutekueche.at/storage/media/recipe/106126/conv/wiener-schnitzel-default.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: '6',
      title: 'Spagetti',
      imageUrl: 'https://www.gutekueche.at/storage/media/recipe/106126/conv/wiener-schnitzel-default.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
  ];
  constructor() { }

  getAllRecipes() {
    this.recipesChanged.next(this.recipes)
    return [...this.recipes]
  }
  
  getRecipe(recipeId: string) {
    return {...this.recipes.find(item => item.id === recipeId)}
  }
  
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(item => item.id !== recipeId)
    this.recipesChanged.next(this.recipes)    
  }
}
