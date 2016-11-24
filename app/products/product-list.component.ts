//java, ...
import { Component, OnInit } from '@angular/core';

//model
import { IProduct } from './product';

//service
import { ProductService } from './product.service';

//decorator
@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})

/**
* public class
*/
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    catId: number = 0 ;

    public errorMessage: string;

    products: IProduct[];

    private _productService: ProductService;

    //aggregration
    //DI
    constructor(_productService: ProductService) {
        this._productService = _productService;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    //hook life cycle
    ngOnInit(): void {
        this._productService.getProducts()
                //observable
                //arrow function
                .subscribe((products : IProduct[]) => {
                    this.products = products;
                    //console.log
                },
                error => this.errorMessage = <any>error,
                () => {
                    console.log("Complete ok bebi");
                });
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
