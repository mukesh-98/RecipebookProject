import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
  
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]

  private subscription : Subscription;
  
  constructor(private recipeService:RecipeService,
              private route: Router,
              private actiroute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription =this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[])=>{
        this.recipes = recipe;
      }
    );
    this.recipes = this.recipeService.getRecipe();
  }

  onNavigate(){
    this.route.navigate(['new'],{relativeTo: this.actiroute});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
