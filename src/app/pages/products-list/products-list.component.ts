import { Component, signal } from '@angular/core';
import { PRODUCTS_DUMMY_LIST, Product } from '../../models/product.model';

import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product"></app-product-card>
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>(PRODUCTS_DUMMY_LIST);
}
