import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { AucthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipes-list/recipe.model';

@Injectable()
export class DatabaseService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AucthService) {
  }

  storeData() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer afdklasflaldf');

    // return this.httpClient.put('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });
    const req = new HttpRequest('PUT', 'https://recipebook-bb6eb.firebaseio.com/recipe.json', this.recipeService.getRecipe(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  fetchData() {
    // this.httpClient.get<Recipe[]>('https://ng-recipe-book-3adbb.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://recipebook-bb6eb.firebaseio.com/recipe.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}