import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itens: Array<any> = [];

  constructor(
    private http: HttpClient
  ) { }

  getItens() {
    return this.itens;
  }

  addToCart(item: any) {
    this.itens.push(item)
  }

  clearCard() {
    this.itens = [];
    return this.itens;
  }

  getShippingPrices() {
    return this.http.get('../../../assets/shipping.json')
  }
}
