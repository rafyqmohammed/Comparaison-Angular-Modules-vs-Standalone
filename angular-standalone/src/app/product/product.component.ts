import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  name = '';
  price = 0;
  products: Product[] = [];

  constructor(private service: ProductService) {
    this.products = this.service.getAll();
  }

  add() {
    if (this.name && this.price > 0) {
      this.service.add({
        id: Date.now(),
        name: this.name,
        price: this.price
      });
      this.name = '';
      this.price = 0;
    }
  }

  delete(id: number) {
    this.service.delete(id);
  }
}
