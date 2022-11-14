import { Component, OnInit } from '@angular/core';
import { productadd } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  constructor(private dsobj: AdminService, private _snackBar: MatSnackBar,private robj: Router) {}

  ngOnInit(): void {}
  childModel = new productadd('', '', 0, '', '');
  oncreate() {
    this.dsobj.postProductsByAdmin(this.childModel).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );
    this._snackBar.open(this.childModel.product_name + ' is Added','Undo', {
      duration: 2000
    });
    this.childModel = new productadd('', '', 0, '', '');
   
  }
}
