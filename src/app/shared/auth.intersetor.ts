import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../app-store/app.reducer';
import * as fromAuth from '../auth/auth-store/auth.reducer';
import 'rxjs/add/operator/switchMap'
import { AucthService } from '../auth/auth.service';

@Injectable()
export class AuthIntersetor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>, private AuthSer:AucthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);
    // const copiedReq = req.clone({headers: req.headers.set('', '')});
    return this.store.select('auth').take(1).switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({params: req.params.set('auth', this.AuthSer.token)});
        return next.handle(copiedReq);
      })
      
    // return null;
  }
}