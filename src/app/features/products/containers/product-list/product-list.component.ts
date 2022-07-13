import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products$ = this.productService.products$;
  constructor(private productService: ProductService) {}
}
