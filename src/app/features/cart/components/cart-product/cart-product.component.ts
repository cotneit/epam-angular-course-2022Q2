import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CartProductModel } from 'src/app/features/products/models/product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductComponent {
  @Input() product!: CartProductModel;

  @Output() productQuantityIncrease = new EventEmitter<CartProductModel>();
  @Output() productQuantityDecrease = new EventEmitter<CartProductModel>();
  @Output() productRemoveFromCart = new EventEmitter<CartProductModel>();

  onQuantityIncrease() {
    this.productQuantityIncrease.emit(this.product);
  }

  onQuantityDecrease() {
    this.productQuantityDecrease.emit(this.product);
  }

  onRemoveFromCart() {
    this.productRemoveFromCart.emit(this.product);
  }
}
