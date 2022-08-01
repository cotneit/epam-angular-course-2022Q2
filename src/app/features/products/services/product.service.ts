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
  },
  {
    id: 2,
    name: 'Ducky One 2',
    description: 'Best in class mechanical keyboard.',
    available: false,
    price: 229.99,
  },
  {
    id: 3,
    name: 'Ducky One 3',
    description: 'Best in class mechanical keyboard that got even better.',
    available: true,
    price: 229.99,
  },
  {
    id: 4,
    name: 'Raspberry Pi 4 Model B 4G',
    description:
      'Your tiny, dual-display, desktop computer\n…and robot brains, smart home hub, media centre, networked AI core, factory controller, and much more',
    available: false,
    price: 229.99,
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
