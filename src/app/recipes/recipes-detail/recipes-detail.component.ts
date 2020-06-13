import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes-list/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store'; 
import * as ShoppingListAction from "../../shopping-list/shopping-store/shopping-list.action"
import * as AppReducer from "../../app-store/app.reducer";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipes:Recipe;
  id:number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router:Router,
              private store:Store<AppReducer.AppState>) { 
  
  } 

  ngOnInit()  {   
    this.route.params.subscribe(
      (parms:Params)=>{
        this.id =+parms['id'];
        this.recipes = this.recipeService.getRecipies(this.id);
        
      }
    );
  }

  addShopping(){
    this.store.dispatch(new ShoppingListAction.AddIngeridents(this.recipes.ingr));
    }

    onEdit(){
      this.router.navigate(['edit'], {relativeTo:this.route});
    }
  
    ondeleterecipe(){
      this.recipeService.ondeleterecipe(this.id);
      this.router.navigate(['../'],{relativeTo:this.route});
    }
}
