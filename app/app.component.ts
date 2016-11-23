import { Component } from '@angular/core';

@Component({
    selector: 'bc-shop',
    template: `
    <!-- interpolation -->
    <h1>{{slogan}}</h1>
    <div>
        <menu class='navbar navbar-default'></menu>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})


export class AppComponent {
    //another prop
    //typescript prop: type
    slogan: string = "Only men make men happy";

    pageTitle: string = `BCShop`;
}
