import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../recipes/recipes-service/recipes.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] | undefined;
  private recipesSubs: Subscription = new Subscription;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    // this.recipesSubs = this.recipesService.updated.subscribe(recipe => {
      //     this.recipes = recipe;
      //   })
    }
    
    ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes()
    console.log("will enter");
  }

  ionViewDidEnter() {
    console.log("did enter");
  }

  ionViewWillLeave() {
    console.log("will leave");
  }

  ionViewDidLeave() {
    console.log("did leave");  
  }
}
