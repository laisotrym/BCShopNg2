import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

//DI
@Injectable()
export class ProductService {
    private _productUrl = 'api/products/products.json';
    private _productDetailUrl = 'api/products/p1.json';

    constructor(private _http: Http) {}

    //logic
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            //ES6
            //convert Collection[e1] -> Collection[e2]
            //reactive programming
            //callback
            //.map(function(response){
            //    return <IProduct[]> response.json();
            //})    
            .map((response: Response) => <IProduct[]> response.json())
            //convert to json string
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    //get 1
    getProductById(id: number): Observable<IProduct> {
        //let url = this._productDetailUrl.replace("id", +id);

        let result = this._http.get(this._productDetailUrl)
                .map(
                    (response: Response) => {
                        return <IProduct> response.json().result.data;
                    } 
                )
                .do(d => console.log('Detail: ' +  JSON.stringify(d)))
                .catch(this.handleError);;


        return result;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
