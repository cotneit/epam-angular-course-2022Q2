import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Input() context: 'product-list' | 'cart' = 'product-list';
  @Output() productAddToCart = new EventEmitter<ProductModel>();
  @Output() productRemoveFromCart = new EventEmitter<ProductModel>();

  onAddToCart() {
    this.productAddToCart.emit(this.product);
    console.log(`Added product ${this.product.name} to cart.`);
  }

  onRemoveFromCart() {
    this.productRemoveFromCart.emit(this.product);
  }
}
