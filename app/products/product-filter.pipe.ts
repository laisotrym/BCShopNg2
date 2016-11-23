import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(products: IProduct[], filterBy: string, catId: number)
    : IProduct[] {
        //tenery
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        let productsTmp : IProduct[] = products;

        //logic, if null -> k co fiter
        //if MUI -> filter
        if(filterBy){
            //get name ->lowercase
            //reative
            productsTmp = products.filter(
                (product: IProduct) => {
                    let name = product.productName.toLocaleLowerCase();
                    if(name.indexOf(filterBy) > -1){
                        return true;
                    }
                    return false; //fast return
                }
            );
        }
        
        //filter by catId
        productsTmp = (catId > 0) ? productsTmp.filter(product => product.catId == catId) : productsTmp ;

        return productsTmp;
    }
}
