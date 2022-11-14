import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { custOrderdata } from 'src/app/models/product';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
userOrderData: custOrderdata[]=[];
  constructor(private adobj:AdminService,private rote:Router,private actobj:ActivatedRoute) { }

  ngOnInit(): void {
    this.adobj.getUsersByAdmin().subscribe(data=>{
      this.userOrderData=data;
      console.log(data)},
    err=>console.log(err))
  }
  onView(id:string){
    this.rote.navigateByUrl('admin/viewuser/'+id)
  }

}
