import { Recipe } from '../Models/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] = [
        new Recipe('Test', 
        'This is a test', 
        'https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon-1920x1080.jpg',
        [
            new Ingredient('meat',1),
            new Ingredient('sugar',20)
        ]),
        new Recipe('Test 2', 
        'This is a test 2', 
        'https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon-1920x1080.jpg',
        [
            new Ingredient('meat',1),
            new Ingredient('sugar',20)
        ])
      ];

      getRecipe(id: number){
        return this.recipes[id];
    }

      getRecipes(){
          return this.recipes.slice();
      }

      constructor(private slService: ShoppingListService){}

      addIngredientsToShoppingList(ingredients : Ingredient[]){
            this.slService.addIngredients(ingredients);
      }

}