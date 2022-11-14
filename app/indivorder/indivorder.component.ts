import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { cartdetails } from '../models/product';

@Component({
  selector: 'app-indivorder',
  templateUrl: './indivorder.component.html',
  styleUrls: ['./indivorder.component.css']
})
export class IndivorderComponent implements OnInit {
orderData:cartdetails[]=[];
kid:string='';
indOrder:string='';
  constructor(private aobj:AdminService,private actobj:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.actobj.snapshot.params['id'];
    this.aobj.getIndividualOrder(id).subscribe(data=>{
      this.indOrder=data.username;
      
      this.kid=data._id
      this.orderData=data.current_cart;
    })
  }

}
