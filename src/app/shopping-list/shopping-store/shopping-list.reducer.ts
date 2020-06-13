import * as ShoppingListAction from "./shopping-list.action";
import { Ingredients } from '../../shared/ingredients.model';

export interface State{
    ingredients: Ingredients[];
    editedIngredient:Ingredients;
    editedIngredientIndex:number;
}

const initialstate:State={
    ingredients:[
        new Ingredients('Apple',5),
        new Ingredients('Pineapple',5)
    ],
    editedIngredient:null,
    editedIngredientIndex:-1
};

export function ShoppingListReducer(state=initialstate,action:ShoppingListAction.ShoppingListAction){
    switch(action.type) {
        case ShoppingListAction.ADD_INGERIDENT:
            return{
                ...state,
                ingredients:[...state.ingredients,action.payload]
            };
        
        case ShoppingListAction.ADD_INGERIDENTS:
            return{
                ...state,
                ingredients:[...state.ingredients,...action.payload]
            };

        case ShoppingListAction.DELETE_INGERIDENTS:
            const ingrident= [...state.ingredients];
            ingrident.splice(state.editedIngredientIndex,1); 
            return{
                ...state,
                ingredients:ingrident,
                editedIngredient:null,
                editedIngredientIndex:-1
            };

        case ShoppingListAction.UPDATE_INGERIDENTS:
            const inger = state.ingredients[state.editedIngredientIndex];
            const updateInger = {
                ...inger,
                ...action.payload.ingerident,
                editedIngredient:null,
                editedIngredientIndex:-1
            };

            const oldingr= [...state.ingredients];
            oldingr[state.editedIngredientIndex]= updateInger;
            return{
                ...state,
                ingredients: oldingr
            };

            case ShoppingListAction.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return{
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };
            
            case ShoppingListAction.STOP_EDIT:
            return{
                ...state,
                editedIngredient: null,
                editedIngredientIndex:-1
            };
        default:
            return state;
    }
     
}
