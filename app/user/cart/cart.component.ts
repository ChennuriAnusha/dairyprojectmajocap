import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { cartdetails, userCurrentCart, userData } from 'src/app/models/product';

import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  message:string=''
  flag:number=0;
  kid: any;
  userdata: userCurrentCart[]=[];
  cartdata: cartdetails[] = [];
  pricearr: Number[] = [];
  totalCart: number = 0;
  inputnumber: number = 0;
  totalprice: number = 0;
  constructor(
    private rote: Router,
    private _snackBar: MatSnackBar,
    private iuonj: UserdataService
  ) {}

  ngOnInit(): void {
    this.kid = localStorage.getItem('userdetails');
    this.kid = JSON.parse(this.kid);
    this.kid = this.kid._id;
    this.iuonj.getIndivdualUser(this.kid).subscribe((data) => {
      this.userdata = data;
      //console.log(this.userdata);
      this.cartdata = data.current_cart;
      //console.log(this.cartdata);
    });
  }
  
  onPay() {
    if(this.totalpay()!=0){
    this.rote.navigateByUrl('user/' + this.kid + '/payment');
    localStorage.setItem('totalCartPrice', JSON.stringify(this.totalCart));
    localStorage.setItem('cart_products', JSON.stringify(this.cartdata));}
    else{
      //alert("Empty Cart")
      this.message="Oops! Empty Cart"
    }
  }

  plus(k: String) {
    this.cartdata.forEach((e) => {
      if (e._id === k) {
        let priceIndProduct = e.price / e.Quantity;
        e.Quantity = e.Quantity + 1;
        e.price = priceIndProduct * e.Quantity;

        this.iuonj.getIndivdualUser(this.kid).subscribe((data) => {
          data.current_cart = this.cartdata;
          this.onmodifyCartIndProduct(data);
        });
      }
    });
  }
  minus(k: String) {
    this.cartdata.forEach((e) => {
      if (e._id === k && e.Quantity != 1) {
        let priceIndProduct = e.price / e.Quantity;
        e.Quantity = e.Quantity - 1;
        e.price = priceIndProduct * e.Quantity;
        console.log(e.Quantity, e.price);
        this.iuonj.getIndivdualUser(this.kid).subscribe((data) => {
          data.current_cart = this.cartdata;
          this.onmodifyCartIndProduct(data);
        });
      }
    });

    this.onmodifyCartIndProduct(this.cartdata);
  }

  onmodifyCartIndProduct(k: object) {
    this.iuonj.addProductToCart(this.kid, k).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }

  totalpay() {
    this.totalCart = 0;
    this.cartdata.forEach((e) => {
      this.totalCart += e.price;
    });
    return this.totalCart;
  }
  onRemoveFromCart(id: string) {
   
    this.iuonj.getIndivdualUser(this.kid).subscribe((data) => {
      let user = data;
      user.current_cart = user.current_cart.filter(
        (cart: any) => cart._id !== id
      );
      this.onmodifyCartIndProduct(user);
      this._snackBar.open("Removed from the cart",'Undo', {
        duration: 2000
      });
      location.reload();
    });
  }
 
}
