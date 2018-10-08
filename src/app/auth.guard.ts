import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {

    // condition checking 
    if (localStorage.getItem("auth")) {
      return true;
    } else {
      return false;
    }


  }
}
