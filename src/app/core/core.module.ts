import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.routing.module';
import { AuthGard } from '../auth/auth.guard.service';
import { RecipeService } from '../recipes/recipe.service';
import { DatabaseService } from '../shared/database.service';
import { AucthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthIntersetor } from '../shared/auth.intersetor';
import{Logging} from "../shared/logging.intercetor"

@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        CommonModule,
        BrowserModule,
        AppRoutingModule
    ],

    providers: [
        RecipeService,
        DatabaseService,
        AucthService,
        AuthGard,
      {provide:HTTP_INTERCEPTORS, useClass:AuthIntersetor, multi :true},
       {provide:HTTP_INTERCEPTORS, useClass:Logging, multi :true}
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ]
})

export class CoreModule{
    
}