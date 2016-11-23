import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    template: `
            <div class='container-fluid'>
                <!-- interpolation binding -->
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                     <li><a [routerLink]="['/about']">About</a></li>
                </ul>
            </div>
     `
})


export class AppMenuComponent {
}
