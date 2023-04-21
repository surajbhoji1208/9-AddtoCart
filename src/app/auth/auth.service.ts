import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  //login
  authgourd = new BehaviorSubject<boolean>(false);
 
  login(data: any) {
    this.http.get<any>('http://localhost:3000/login').subscribe(res=>{
        const user=res.find((a:any)=>{
        return a.name===data.user && a.pass===data.pass
      
      
      })
     
      if(user)
      {
        this.authgourd.next(true)
        this.route.navigate(['home'])
       
      }

      
    })
  }

  //search event

}
