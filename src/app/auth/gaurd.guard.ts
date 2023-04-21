import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GaurdGuard implements CanActivate {
  constructor(private auth: AuthService,private rout:Router) {
    
    
  }
  
  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    
    return this.auth.authgourd
   
  }
}
