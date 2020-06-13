import { Component, OnInit} from '@angular/core';
import { Ingredients } from "../shared/ingredients.model";
import * as AppReducer from "../app-store/app.reducer";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListAction from  "../shopping-list/shopping-store/shopping-list.action"


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit{
  shoppingListState:Observable<{ingredients:Ingredients[]}>;

  constructor(private store:Store<AppReducer.AppState>) { }

  ngOnInit(){
    this.shoppingListState = this.store.select('shoppingList');

  }

  onEdit(id:number){
    this.store.dispatch(new ShoppingListAction.StartEdit(id));
  }
}
