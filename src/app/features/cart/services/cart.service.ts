import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, reduce } from 'rxjs';
import { CartProductModel, ProductModel } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProductMap$$ = new BehaviorSubject<
    Map<CartProductModel['id'], CartProductModel>
  >(new Map());
  cartProductMap$ = this.cartProductMap$$.asObservable();
  cartProducts$ = this.cartProductMap$.pipe(
    map((cartProductMap) => [...cartProductMap.values()]),
  );

  cartTotalQuantity$ = this.cartProducts$.pipe(
    map((products) => products.reduce((acc, curr) => acc + curr.cartAmount, 0)),
  );
  cartTotalCost$ = this.cartProducts$.pipe(
    map((products) =>
      products.reduce((acc, curr) => acc + curr.price * curr.cartAmount, 0),
    ),
  );

  addToCart(product: ProductModel) {
    this.cartProductMap$$.value.set(product.id, {
      ...product,
      cartAmount: 1,
    });
    this.cartProductMap$$.next(this.cartProductMap$$.value);
  }

  removeFromCart(product: ProductModel) {
    this.cartProductMap$$.value.delete(product.id);
    this.cartProductMap$$.next(this.cartProductMap$$.value);
  }

  increaseAmount(product: ProductModel) {
    const productFromMap = this.cartProductMap$$.value.get(product.id);

    if (!productFromMap) {
      throw new Error('Product is not in the cart.');
    }

    this.cartProductMap$$.value.set(product.id, {
      ...productFromMap,
      cartAmount: productFromMap.cartAmount + 1,
    });

    this.cartProductMap$$.next(this.cartProductMap$$.value);
  }

  decreaseAmount(product: ProductModel) {
    const productFromMap = this.cartProductMap$$.value.get(product.id);

    if (!productFromMap) {
      throw new Error('Product is not in the cart.');
    }

    if (productFromMap.cartAmount === 1) {
      return;
    }

    this.cartProductMap$$.value.set(product.id, {
      ...productFromMap,
      cartAmount: productFromMap.cartAmount - 1,
    });

    this.cartProductMap$$.next(this.cartProductMap$$.value);
  }
}
