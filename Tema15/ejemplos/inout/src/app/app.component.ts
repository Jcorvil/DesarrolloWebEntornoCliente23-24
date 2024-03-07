import { Component } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'inout';
  productos: Array<Product> = [
    { art: 'Handbag', precio: 120 },
    { art: 'Dress', precio: 60 },
    { art: 'Car', precio: 50000 }
  ];
  add(newCard: Product): void {
    console.log(newCard);
    this.productos.push(newCard);
  }
}
