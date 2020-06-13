import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AucthService } from "../auth.service";
import { DatabaseService } from '../../shared/database.service';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  error:string;
  constructor(private route: ActivatedRoute,
    private router:Router, private authservice:AucthService,private databaseAuth:DatabaseService) { }

  ngOnInit(): void {
  }

  onSignin(form:NgForm){
    const email = form.value.email;
    const password = form.value.password; 
    this.authservice.signIn(email,password);
    //this.databaseAuth.fetchData();  
    
  }

  onCancel(){
    this.router.navigate(['/'], {relativeTo:this.route});
  }

}
