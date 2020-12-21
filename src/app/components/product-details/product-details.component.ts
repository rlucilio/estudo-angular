import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.product = products[this.activeRoute.snapshot.params.productId];
  }
}
