import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignpComponent } from './signp/signp.component';
import { SiginComponent } from './sigin/sigin.component';


const authRoutes: Routes =[

    { path:"signup", component:SignpComponent},
    { path:"signin", component:SiginComponent},

];

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports:[RouterModule]
})

export class AuthRoutingModule{

}