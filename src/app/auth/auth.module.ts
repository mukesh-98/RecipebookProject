import { NgModule } from '@angular/core';
import { SiginComponent } from './sigin/sigin.component';
import { SignpComponent } from './signp/signp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
    declarations:[
        SiginComponent,
        SignpComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        AuthRoutingModule,
    ]
})
export class AuthModule{

}