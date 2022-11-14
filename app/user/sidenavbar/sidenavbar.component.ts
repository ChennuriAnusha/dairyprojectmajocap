import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css'],
})
export class SidenavbarComponent implements OnInit {
  details: any;
  k: any;
  constructor(
    private rote: Router,
    private _snackBar: MatSnackBar,
    private actobj: ActivatedRoute,
    private uobj: UserdataService
  ) {}
  kid: number = 0;
  ngOnInit(): void {
    let id = this.actobj.snapshot.params['id'];
    this.k = localStorage.getItem('userdetails');
    this.k = JSON.parse(this.k);

    this.uobj.getIndivdualUser(id).subscribe(
      (data) => {
        this.details = data;
        this.kid = this.details._id;
        console.log(this.kid);
      },
      (err) => console.log(err)
    );
  }
  onCart() {
    this.rote.navigateByUrl('user/' + this.kid + '/cart');
  }
  onOrders() {
    this.rote.navigateByUrl('user/' + this.kid + '/previousOrders/' + this.kid);
  }
  onProducts() {
    this.rote.navigateByUrl('user/' + this.kid + '/products');
  }
  onOffers() {
    this.rote.navigateByUrl('user/' + this.kid + '/offers');
  }
  oncategory(){
    this.rote.navigateByUrl('user/' + this.kid + '/categories');
  }
  onLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
    this.rote.navigateByUrl('/home');
    this._snackBar.open('LogOut Successful', 'Undo', {
      duration: 2000,
    });
  }
}
