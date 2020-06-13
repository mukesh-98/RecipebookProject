import * as ShoppingReducer from "../shopping-list/shopping-store/shopping-list.reducer"
import * as AuthReducer from "../auth/auth-store/auth.reducer"
import { ActionReducerMap } from '@ngrx/store'

export interface AppState{
    shoppingList:ShoppingReducer.State;
    auth:AuthReducer.State;
}

export const reducer: ActionReducerMap<AppState>={
    shoppingList: ShoppingReducer.ShoppingListReducer,
    auth:AuthReducer.authReducer
};