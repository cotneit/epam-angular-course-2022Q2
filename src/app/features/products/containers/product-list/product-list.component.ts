import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { map, Observable, of, Subject, takeUntil, tap } from 'rxjs';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnDestroy {
  private destroy$$ = new Subject<void>();

  products$ = this.productService.products$;
  productIDsInCart = new Set<number>();

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
  ) {
    this.cartService.cartProductMap$
      .pipe(
        map((cartProducts: Map<number, ProductModel>) => cartProducts.keys()),
        tap((cartProductIDs) => (this.productIDsInCart = new Set(cartProductIDs))),
        tap(() => this.cdr.markForCheck()),
        takeUntil(this.destroy$$),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  onProductAddToCart(product: ProductModel) {
    this.cartService.addToCart(product);
  }

  trackByProduct(index: number, product: ProductModel): number {
    return product.id;
  }

  isProductInCart(product: ProductModel) {
    return this.productIDsInCart.has(product.id);
  }
}
