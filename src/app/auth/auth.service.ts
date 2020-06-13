import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import "firebase/auth"
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../app-store/app.reducer';
import * as AuthActions from './auth-store/auth.action';

@Injectable()
export class AucthService {

  token:string;

  constructor(private router: Router, private store: Store<fromApp.AppState>) {}

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        user => {
          this.store.dispatch(new AuthActions.SignUp());
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.store.dispatch(new AuthActions.SetToken(token));
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      )
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new AuthActions.SignIn());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token=token
                this.store.dispatch(new AuthActions.SetToken(token));
              }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.LogOut());
  }
}