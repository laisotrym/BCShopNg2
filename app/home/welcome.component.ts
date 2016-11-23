//import dependency
import { Component } from '@angular/core';

//decorator @Component({})
@Component({
    templateUrl: 'app/home/welcome.component.html'
})

//view controller
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';

    onInit(){
        //get all product
        //call ProductService ->getProducts()

    }
}
