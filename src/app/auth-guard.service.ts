import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
          if (this.dataService.getCurrentUser()!==null) {
            return true;
          } else {
            this.router.navigate(['anmelden']);
          }
  }
}
