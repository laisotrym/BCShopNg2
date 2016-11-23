//Data Transfer onject (DTO)
//without any logic
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    catId: number,
    imageUrl: string;
}

