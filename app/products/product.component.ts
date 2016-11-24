import { Component } from '@angular/core';

@Component({
    selector: 'bc-product',
    template: `
    <!-- interpolation -->
    <img src="app/assets/images/banner.png" />
    <router-outlet></router-outlet>
     `
})


export class ProductComponent {
    //another prop
    //typescript prop: type
}
