import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() productAddToCart = new EventEmitter<ProductModel>();

  onAddToCart() {
    this.productAddToCart.emit(this.product);
    console.log(`Added product ${this.product.name} to cart.`);
  }
}
