import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './features/cart/cart.module';
import { ProductsModule } from './features/products/products.module';
import { FirstModule } from './shared/first/first.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FirstModule, ProductsModule, CartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// Все хорошо
