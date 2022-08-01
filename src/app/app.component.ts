import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from './features/cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitleElement!: ElementRef<HTMLHeadingElement>;

  title = 'Just your regular store';
  cartListShown$ = this.cartService.cartProducts$.pipe(
    map((products) => Boolean(products.length)),
  );

  constructor(private cartService: CartService) {}

  ngAfterViewInit() {
    this.appTitleElement.nativeElement.innerText = this.title;
  }
}
