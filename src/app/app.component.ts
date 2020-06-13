import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  loadedfeature ='recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDs5updSWdX0aS8S5ff-LctpSG9h7wKvjQ",
      authDomain: "recipebook-bb6eb.firebaseapp.com"
    });
  }


  onNavigate(feature: string){
    this.loadedfeature=feature;
  }
}
