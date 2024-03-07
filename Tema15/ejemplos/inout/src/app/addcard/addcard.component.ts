import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})

export class AddcardComponent implements OnInit {
  art: string = '';
  precio: number = 0;
  @Output() addClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  addNew(): void {
    let card: Product = { art: this.art, precio: this.precio }
    this.addClicked.emit(card);
  }
}
