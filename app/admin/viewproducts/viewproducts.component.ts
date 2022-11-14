import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { DairyService } from 'src/app/dairy.service';
import { productDataByAdmin } from 'src/app/models/product';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {
mdata:productDataByAdmin[]=[];
searchText:string='';
editstatus:boolean=false;
  edituserIndex=0;
  edituserobj=new productDataByAdmin('','','',0,'','');

  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];


  constructor(private actobj:ActivatedRoute,private _snackBar: MatSnackBar,private mobj:DairyService,private roj:Router,private aobj:AdminService) { }

  ngOnInit(): void {
    this.onDairyGet()
   

  }
  onDairyGet(){
    this.mobj.getdiarydata().subscribe((data)=>{
      console.log(data);
      this.mdata=data;
    },
    (err)=>{
      console.log(err)
    })

  }
onDelete(id:string){
  this.aobj.deleteprodByAdmin(id).subscribe(data=>console.log(data),err=>console.log(err))
  
 
  location.reload()
  this._snackBar.open("data has been Deleted",'Undo', {
    duration: 3000
  });
  
}
onEdit(id:string){

}

onedit(user:productDataByAdmin,ind:number){
  this.edituserobj=user;
  this.edituserIndex=ind;
  this.editstatus=true;
  console.log(this.editstatus)
}
onsave(){
  // modifieduserdata.product_Image=this.edituserobj.product_Image
  console.log(this.edituserobj)
  this.editstatus=false;
  this.aobj.editProductByAdmin(this.edituserobj._id,this.edituserobj).subscribe(
    data=>{console.log(data);
  
      this._snackBar.open(this.edituserobj.product_name+" data has been updated",'Undo', {
        duration: 2000
      });
    },
    err=>console.log(err)
  )

  
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
