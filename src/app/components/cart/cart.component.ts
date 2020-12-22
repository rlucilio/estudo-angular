import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/card/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<any>;
  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItens();

  }

  private createForm() {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearCard();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
