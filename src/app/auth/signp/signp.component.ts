import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AucthService } from '../auth.service';

@Component({
  selector: 'app-signp',
  templateUrl: './signp.component.html',
  styleUrls: ['./signp.component.css']
})
export class SignpComponent implements OnInit {

  
  
  constructor(private route: ActivatedRoute,
    private router:Router, private authservice:AucthService) { }
  
  ngOnInit(): void {
  }

  onSignup(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signUp(email,password);

    
  }

  onCancel(){
    this.router.navigate(['/'], {relativeTo:this.route});
  }
}
