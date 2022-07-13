import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts$$ = new BehaviorSubject<ProductModel[]>([]);
  cartProducts$ = this.cartProducts$$.asObservable();

  addToCart(product: ProductModel) {
    this.cartProducts$$.next([...this.cartProducts$$.value, product]);
  }

  removeFromCart(product: ProductModel) {
    const productsWithoutRemoved = this.cartProducts$$.value.filter(
      (cartProduct) => cartProduct.id !== product.id,
    );
    this.cartProducts$$.next(productsWithoutRemoved);
  }
}
