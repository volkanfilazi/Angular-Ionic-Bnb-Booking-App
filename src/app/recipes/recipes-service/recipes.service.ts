import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
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
      imageUrl: 'https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?s=612x612&w=0&k=20&c=SeEWmJfPQlX1zVUHPKjL-cgYeMs9cZ97-kdZMm7feA4=',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: '7',
      title: 'Falafel',
      imageUrl: 'https://media.istockphoto.com/id/510303555/de/foto/ganzes-und-halbes-falafel-isoliert-auf-wei%C3%9Fem-hintergrund.jpg?s=612x612&w=0&k=20&c=qiwNPGsJj82VkYBv_uBgZKDKaIPUZJ6jO3FzNYV5W8I=',
      ingredients: ['French Fries', 'Pork Meat', 'Falafel']
    },
    {
      id: '8',
      title: 'Kebap',
      imageUrl: 'https://media.istockphoto.com/id/851493796/de/foto/nahaufnahme-von-kebab-sandwich.jpg?s=612x612&w=0&k=20&c=2dFSuHceKQgKPHF0DTRCqy6ojfOSzOUJFSu4CrVMzIE=',
      ingredients: ['French Fries', 'Pork Meat', 'Falafel']
    },
    {
      id: '9',
      title: 'Hotdog',
      imageUrl: 'https://img.freepik.com/free-photo/delicious-hot-dogs-with-mustard-onion_23-2148768194.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Falafel']
    },
    {
      id: '10',
      title: 'Hamburger',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/705104968/display_1500/stock-photo-fresh-tasty-burger-isolated-on-white-background-705104968.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Falafel']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return this.recipes
  }
  
  getRecipe(recipeId: string) {
    return {...this.recipes.find(item => item.id === recipeId)}
  }
  
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(item => item.id !== recipeId)
  }
}
