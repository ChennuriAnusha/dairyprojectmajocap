import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { customerData, userData } from 'src/app/models/product';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  k: any;
  total_bill: number = 0;
  current_cart: any;
  customerOrderData: any = new Object();
  customerData!: any;
  checkoutform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[7-9][0-9]{9}$'),
    ]),
    Address: new FormControl('', [Validators.required]),
    nameOnCard: new FormControl('', [Validators.required]),
    crediCardNum: new FormControl('', [Validators.required]),
    expiresOn: new FormControl('', Validators.required),
    cvv: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor(
    private rote: Router,
    private _snackBar: MatSnackBar,
    private actobj: ActivatedRoute,
    private adobj: AdminService,
    private iuonj: UserdataService
  ) {}

  ngOnInit(): void {
    this.k = localStorage.getItem('totalCartPrice');
    this.customerData = localStorage.getItem('userdetails');
    this.customerData = JSON.parse(this.customerData);
    this.current_cart = localStorage.getItem('cart_products');
    this.current_cart = JSON.parse(this.current_cart);
  }
  OnCheckOut() {
    if (this.checkoutform.valid) {
      this.customerOrderData.userId = this.customerData._id;
      this.customerOrderData.username = this.checkoutform.value.username;
      this.customerOrderData.phoneNumber = this.checkoutform.value.phonenumber;
      this.customerOrderData.Address = this.checkoutform.value.Address;
      this.customerOrderData.current_cart = this.current_cart;
      this.customerOrderData.total_bill = this.k;
      console.log(this.customerOrderData);
      this.adobj.postUsersToAdmin(this.customerOrderData).subscribe(
        (data) => console.log(data),
        (err) => console.log(err)
      );
      this.customerData.current_cart = [];
      console.log(this.customerData);
      this.emptycart(this.customerData._id, this.customerData);
      this.removeInLocalStroage();
    } else {
      alert('Please Enter Valid Credentials');
    }
    this.checkoutform.reset();
  }
  removeInLocalStroage() {
    localStorage.removeItem('cart_products');
    localStorage.removeItem('totalCartPrice');
    console.log(this.customerData);
    this.rote.navigateByUrl('user/' + this.customerData._id + '/products');
    this._snackBar.open('Order Conformed', 'Undo', {
      duration: 3000,
    });
  }

  emptycart(id: string, h: object) {
    this.iuonj.addProductToCart(id, h).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
}
