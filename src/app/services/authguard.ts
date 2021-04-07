import { Injectable } from '@angular/core';
import { AutherizationService } from './autherization.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class Authguard implements CanActivate {

  constructor(private service:AutherizationService, private router:Router) { }

  canActivate(){
    if(this.service.isUserLoggedin())
    return true;
    this.router.navigate(['/']);
    return false;
  }
  /* canActivate(): boolean {
    if (this.service.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this.router.navigate(['/login'])
      return false
    }
  } */
}
