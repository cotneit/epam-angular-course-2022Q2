export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export interface CartProductModel extends ProductModel {
  cartAmount: number;
}
