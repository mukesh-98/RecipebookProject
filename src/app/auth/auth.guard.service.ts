import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppReducer from "../app-store/app.reducer";
import * as AuthReducer from "../auth/auth-store/auth.reducer";




@Injectable()
export class AuthGard implements CanActivate{

    constructor(private store:Store<AppReducer.AppState>){}


    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return this.store.select('auth').map((authState: AuthReducer.State) => {
            return authState.isauth;
          });
} 
}