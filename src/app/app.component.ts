import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsListComponent],
  template: `
    <app-header></app-header>
    <app-products-list></app-products-list>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}
