import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product';

@Pipe({
    name: 'catIdToName'
})
export class CatIdToNamePipe implements PipeTransform {

    transform(catId: number): string {
        let categories = {
            1: "Warehouse",
            2: "Tools"
        }

        return categories[catId];
    }
}
