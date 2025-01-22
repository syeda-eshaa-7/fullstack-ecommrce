 export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: {
      asset: {
        url: string;
      };
    };
  }