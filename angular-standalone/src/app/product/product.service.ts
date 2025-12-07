import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  add(product: Product) {
    this.products.push(product);
  }

  delete(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
