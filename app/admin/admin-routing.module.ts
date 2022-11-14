import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndivorderComponent } from '../indivorder/indivorder.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminComponent } from './admin.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [{ path: '', component: AdminComponent,children:[
  {path:'viewuser',component:ViewusersComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'viewproduct',component:ViewproductsComponent},
  {path:'viewuser/:id',component:IndivorderComponent},
  { path: '', redirectTo: 'viewuser', pathMatch: 'full' },
  
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
