import { Recipe } from "../recipes/recipes-list/recipe.model";
import { Subject } from 'rxjs';

export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
      /*  new Recipe(
        'Milk Donut',
        "Milk Donut Recipe",
        "https://healthyfitnessmeals.com/wp-content/uploads/2018/06/banana-protein-donuts-4.jpg",
        [new Ingredients('Donuts',6)]
      )*/];

      constructor(){

      }

      getRecipe(){
          return this.recipes.slice();
      }



    getRecipies(index: number){
        return this.recipes[index];
    }
      

      
    addNewRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateNewRecipe(id:number, NewRecipe: Recipe){
        this.recipes[id]=NewRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
      
      ondeleterecipe(id:number){
          this.recipes.splice(id,1);
          this.recipeChanged.next(this.recipes.slice());
      }

    setRecipes(recipe:Recipe[]){
        this.recipes = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }
}