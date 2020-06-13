import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"                           // Importing Angular Core Packages
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { DropdownDirective } from './shared/dropdown.directive';    //Importing Directives

import { ShoppingModule } from './shopping-list/shopping.module';   //Importing Modules
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app.routing.module';         // Importing Routing Module
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from "./app-store/app.reducer"

@NgModule({
  declarations: [
    AppComponent,    
    DropdownDirective,
  
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,

    AppRoutingModule,
   
    CoreModule,
    ShoppingModule,
    AuthModule,
    StoreModule.forRoot(reducer),
  
   
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
