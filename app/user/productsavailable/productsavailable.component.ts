import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DairyService } from 'src/app/dairy.service';
import { cartdetails, forProduct } from 'src/app/models/product';
import { UserdataService } from 'src/app/userdata.service';
@Component({
  selector: 'app-productsavailable',
  templateUrl: './productsavailable.component.html',
  styleUrls: ['./productsavailable.component.css'],
})
export class ProductsavailableComponent implements OnInit {
  k: any;
  currentcart: cartdetails[] = [];
  searchText: string = '';
  mdata: forProduct[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];
  constructor(
    private actobj: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private mobj: DairyService,
    private roj: Router,
    private uobj: UserdataService
  ) {}
  kid: String = '';
  ngOnInit(): void {
    this.onDairyGet();
   
  }
  onDairyGet(){
    this.mobj.getdiarydata().subscribe(
      (data) => {
      //  console.log(data);
        this.mdata = data;
      },
      (err) => {
        console.log(err);
      }
    );

  }

  onBought(i: any) {
    // console.log(i)
    this.k = localStorage.getItem('userdetails');
    this.k = JSON.parse(this.k);
    console.log(this.k._id);
    this.uobj.getIndivdualUser(this.k._id).subscribe((data) => {
      this.currentcart = data.current_cart;
      this.currentcart.push(i);
      console.log(this.currentcart);
      data.current_cart = this.currentcart;
      console.log(data);
      this.onAdd(data);
      this._snackBar.open(i.product_name + ' is added to cart', 'Undo', {
        duration: 2000,
      });
    });
  }
  onAdd(hobj: object) {
    this.uobj.addProductToCart(this.k._id, hobj).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.onDairyGet()
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.onDairyGet()
  }
}
