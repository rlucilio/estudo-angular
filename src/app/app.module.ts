import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductAlertsComponent } from "./components/product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from "@angular/common/http";
import { ShippingComponent } from './components/shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "details/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: 'shipping', component: ShippingComponent }
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
