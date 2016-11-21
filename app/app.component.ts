import { Component } from '@angular/core';

@Component({
    selector: 'bc-shop',
    template: `
    <h1>Banner {{pageTitle}}</h1>
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <!-- interpolation binding -->
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                     <li><a [routerLink]="['/about']">About</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent {
    pageTitle: string = `BCShop`;
}
