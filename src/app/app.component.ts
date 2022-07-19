import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from './features/cart/services/cart.service';
import { ProductModel } from './features/products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  cartListShown$ = this.cartService.cartProducts$.pipe(
    map((products: ProductModel[]) => Boolean(products.length)),
  );

  constructor(private cartService: CartService) {}
}
