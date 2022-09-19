import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  user : any = null;

  constructor(public router: Router) {}
  
  canActivate(): boolean {
    this.user = sessionStorage.getItem("User");
    
      if (!this.user) {
        this.router.navigate(['']);
        return false;
      }
      return true;
  }
  
}
