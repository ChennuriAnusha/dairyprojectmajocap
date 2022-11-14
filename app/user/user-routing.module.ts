import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OffersComponent } from './offers/offers.component';
import { PaymentComponent } from './payment/payment.component';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';
import { ProductsavailableComponent } from './productsavailable/productsavailable.component';
import { UserComponent } from './user.component';

const routes: Routes = [
 
{ path: ':id', component: UserComponent,children:[
  {path:'products',component:ProductsavailableComponent},
  {path:'cart',component:CartComponent},
  {path:'offers',component:OffersComponent},
  {path:'payment',component:PaymentComponent},
  {path:'previousOrders/:id',component:PreviousOrdersComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full' },
]},
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

