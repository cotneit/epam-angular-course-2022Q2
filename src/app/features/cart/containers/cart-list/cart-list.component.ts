import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductModel } from 'src/app/features/products/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
  cartProducts$ = this.cartService.cartProducts$;
  cartTotalCost$ = this.cartService.cartTotalCost$;
  cartTotalQuantity$ = this.cartService.cartTotalQuantity$;

  constructor(private cartService: CartService) {}

  onProductRemoveFromCart(product: ProductModel) {
    this.cartService.removeFromCart(product);
  }

  onProductQuantityIncrease(product: ProductModel) {
    this.cartService.increaseAmount(product);
  }

  onProductQuantityDecrease(product: ProductModel) {
    this.cartService.decreaseAmount(product);
  }

  trackByProduct(index: number, product: ProductModel): number {
    return product.id;
  }
}
