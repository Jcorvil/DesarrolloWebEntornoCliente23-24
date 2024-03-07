import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() producto: Product = { art: '', precio: 0 };
  url: string = '';
  constructor() {
  }
  ngOnInit(): void {
    this.url = 'https://source.unsplash.com/random/500x500/?' + this.producto.art;
  }
}
