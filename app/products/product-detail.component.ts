import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';

    //should meaningful name
    //TODO: only for demo that we can use any name
    p1: IProduct;

    //DI, service, short
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _pService: ProductService) {
    }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`; //backtick `heheh ${name}`

        //logic here
        this._pService.getProductById(id)
            .subscribe(
                (result) => {
                    this.p1 = result;
                    console.log(this.p1);
                }
            );
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
