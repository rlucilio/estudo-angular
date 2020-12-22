import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "src/app/products";
import { CartService } from "src/app/services/card/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private activeRoute: ActivatedRoute,
    private cardService: CartService) {}

  ngOnInit() {
    this.product = products[this.activeRoute.snapshot.params.productId];
  }

  addToCart() {
    this.cardService.addToCart(this.product)
    window.alert('Your product has been added to the cart!')
  }
}
