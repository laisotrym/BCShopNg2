import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    //implements function
    canActivate(route: ActivatedRouteSnapshot): boolean {
        //parameter, + -> string
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');

            //location.href = "", no
            //router -> SPA
            this._router.navigate(['/products']);
            return false;
        };
        return true;
    }
}
