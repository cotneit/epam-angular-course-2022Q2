import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';

const products: ProductModel[] = [
  {
    id: 1,
    name: 'Logitech G502',
    description: 'Gaming mouse.\nFrom Logitech.\nWhat else is there to know?',
    available: true,
    price: 129.99,
    image:
      'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-2-nb.png?v=1',
  },
  {
    id: 2,
    name: 'Ducky One 2',
    description: 'Best in class mechanical keyboard.',
    available: true,
    price: 229.99,
    image:
      'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-2-nb.png?v=1',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<ProductModel[]> = of(products);

  getProducts(): ProductModel[] {
    return products;
  }
}
