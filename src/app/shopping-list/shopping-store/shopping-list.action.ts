import {Action } from "@ngrx/store";
import { Ingredients } from '../../shared/ingredients.model';

export const ADD_INGERIDENT = 'ADD_INGERIDENT';
export const ADD_INGERIDENTS = 'ADD_INGERIDENTS';
export const DELETE_INGERIDENTS = 'DELETE_INGERIDENTS';
export const UPDATE_INGERIDENTS = 'UPDATE_INGERIDENTS';
export const START_EDIT ="START_EDIT";
export const STOP_EDIT ="STOP_EDIT";
//----------------------Add Ingerident----------------------------//
export class AddIngerident implements Action {
    readonly type = ADD_INGERIDENT;

    constructor(public payload:Ingredients) { }
}

//----------------------Add Ingeridents----------------------------//
export class AddIngeridents implements Action {
    readonly type = ADD_INGERIDENTS;

    constructor(public payload:Ingredients[]) { }
}

//----------------------Delete Ingerident----------------------------//
export class DeleteIngeridents implements Action {
    readonly type = DELETE_INGERIDENTS;

  
}

//----------------------Update Ingerident----------------------------//
export class UpdateIngeridents implements Action {
    readonly type = UPDATE_INGERIDENTS;

    constructor(public payload:{ingerident:Ingredients}) { }
}


//----------------------Start Edit---------------------------//
export class StartEdit implements Action {
    readonly type = START_EDIT;

    constructor(public payload:number) { }
}

//----------------------Stop Edit---------------------------//
export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}




export type ShoppingListAction = AddIngerident |
AddIngeridents |
DeleteIngeridents |
UpdateIngeridents | 
StartEdit|
StopEdit;

 