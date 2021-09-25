/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class CanActivateModel implements CanActivate {
    constructor(private readonly router: Router) {}
    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
        const choices = JSON.parse(sessionStorage.getItem('model_options') as string) ?? {};

        if (choices.model) {
            return true;
        } else {
            console.warn('No choices were made for the model, redirecting back to selection screen');
            this.router.navigate(['']);
            return false;
        }
  }
}