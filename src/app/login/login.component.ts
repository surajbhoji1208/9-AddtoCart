import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:AuthService,private router: Router,private http2:HttpClient) { 


    
  }

  loginform=new FormGroup({
    user:new FormControl(''),
    pass:new FormControl('')
  })
  userval:any
 
  ngOnInit(): void {
    
    
  }

  login()
  {
     
  
       
            
   this.http.login(this.loginform.value)
             
   
    
  }


}
