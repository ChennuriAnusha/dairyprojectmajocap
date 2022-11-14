import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CartComponent } from './cart/cart.component';
import { ProductsavailableComponent } from './productsavailable/productsavailable.component';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';
import { OffersComponent } from './offers/offers.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    UserComponent,
    CartComponent,
   ProductsavailableComponent,
    PreviousOrdersComponent,
    OffersComponent,
    SidenavbarComponent,
    PaymentComponent,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    NgxPaginationModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule ,
    CdkAccordionModule
  ]
})
export class UserModule { }

