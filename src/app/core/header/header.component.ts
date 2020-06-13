import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';
import { AucthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AppReducer from "../../app-store/app.reducer";
import * as AuthReducer from "../../auth/auth-store/auth.reducer";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

authState:Observable<AuthReducer.State>;

constructor(private datastore:DatabaseService,
  public authSer:AucthService,
  private router:Router,
  private route:ActivatedRoute,
  private store:Store<AppReducer.AppState> ) {
}

  

  ngOnInit(){
    this.authState = this.store.select('auth');

  }

  onSaveRecipe(){
    this.datastore.storeData().subscribe( );
    
  }

  onFetchRecipe(){
    this.datastore.fetchData();
    this.router.navigate(['/recipes'], {relativeTo:this.route});
  }

  onLogout(){
    this.authSer.logout();
  }

}
 