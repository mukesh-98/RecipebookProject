import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListAction from "../shopping-store/shopping-list.action"
import * as AppReducer from "../../app-store/app.reducer";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild("form") shopingLisform: NgForm;
  subsc:Subscription;
  EditMode=false;
  udateItem:Ingredients;
  
  constructor(private store:Store<AppReducer.AppState>) { }

  ngOnInit(){
    this.subsc =this.store.select('shoppingList').subscribe(
      data=>{
        if(data.editedIngredientIndex>-1){
          this.udateItem= data.editedIngredient;
          this.EditMode=true;
          this.shopingLisform.setValue({
            formname: this.udateItem.name,
            formamt: this.udateItem.amount
          })
        }else{
          this.EditMode=false;
        }
      }
    );
    
  }
  
  onAdd(form:NgForm){
    const value =form.value;
    const newIngrident =  new Ingredients(value.formname,value.formamt);   
    if (this.EditMode){
      this.store.dispatch(new ShoppingListAction.UpdateIngeridents({ingerident:newIngrident }));
    } else{
      this.store.dispatch(new ShoppingListAction.AddIngerident(newIngrident));
    } 
    this.EditMode=false;
    form.reset()
  }

  onClear(){

    this.shopingLisform.reset();
    this.EditMode=false;
  }

  onDelete(){
    this.store.dispatch(new ShoppingListAction.DeleteIngeridents());
    this.onClear()
  }

  ngOnDestroy(){
    this.store.dispatch(new ShoppingListAction.StopEdit())
    this.subsc.unsubscribe();
  }


}
