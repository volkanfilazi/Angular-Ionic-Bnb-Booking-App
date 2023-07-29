import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipesService } from '../recipes-service/recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe | undefined;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMapp => {
      if(!paramMapp.has('recipeId')){
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMapp.get('recipeId');
      if(recipeId){
        this.loadedRecipe = this.recipesService.getRecipe(recipeId)
      }
    });
  }

  deleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?', 
      message: 'Do you realy want to delete the recipe?',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          if(this.loadedRecipe?.id){
            this.recipesService.deleteRecipe(this.loadedRecipe?.id)
            this.router.navigate(['/recipes']);
          }
        }
      }
    ]
    
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
