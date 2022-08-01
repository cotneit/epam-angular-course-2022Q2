import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './containers/cart-list/cart-list.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CartListComponent, CartProductComponent],
  imports: [CommonModule, SharedModule],
  exports: [CartListComponent],
})
export class CartModule {}
