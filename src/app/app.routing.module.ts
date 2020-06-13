import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';


const routes:Routes=[
    { path:"",component:HomeComponent},
    { path:"recipes", loadChildren:()=>import('./recipes/recipes.module').then(m => m.RecipeModule)},
    { path:"shopping", component:ShoppingListComponent},

];  

@NgModule({
    imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule{

}