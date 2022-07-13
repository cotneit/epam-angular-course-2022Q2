import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './containers/cart-list/cart-list.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [CartListComponent],
  imports: [CommonModule, ProductsModule],
  exports: [CartListComponent],
})
export class CartModule {}
