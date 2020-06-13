import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGard } from '../auth/auth.guard.service';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';


const recipeRoutes: Routes =[
    {
        path:"", component:RecipesComponent, children:[
        { path:"",component:RecipeStartComponent},
        { path:"new",component:RecipeEditComponent,canActivate:[AuthGard]},
        { path:":id",component:RecipesDetailComponent},
        { path:":id/edit",component:RecipeEditComponent,canActivate:[AuthGard]},
    ]}
];

@NgModule({
    imports:[RouterModule.forChild(recipeRoutes)],
    exports:[RouterModule]
})
export class RecipesRoutingModule {

}