import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/features/products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  cartProducts$ = this.cartService.cartProducts$;
  constructor(private cartService: CartService) {}

  onProductRemoveFromCart(product: ProductModel) {
    this.cartService.removeFromCart(product);
  }

  trackByProduct(index: number, product: ProductModel): number {
    return product.id;
  }
}
