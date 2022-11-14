import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { productDataByAdmin } from './models/product';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hobj:HttpClient) { }
  postProductsByAdmin(productData:any):Observable<any>{
    return this.hobj.post(environment.productUrl,productData)
  }

  //posting the orders received by the user
  postUsersToAdmin(orderData:any):Observable<any>{
    return this.hobj.post(environment.adminCustomerViewUrl,orderData)
  }

  getUsersByAdmin():Observable<any>{
    return this.hobj.get(environment.adminCustomerViewUrl)
  }

  getIndividualOrder(id:string):Observable<any>{
    return this.hobj.get(environment.adminCustomerViewUrl+'/'+id);
  }
  deleteprodByAdmin(id:string):Observable<any>{
    return this.hobj.delete(environment.productDeleteUrl+'/'+id);

  }
  ModifyProductByAdmin(id:string):Observable<any>{
    return this.hobj.delete(environment.productUrl+'/'+id);

  }
  editProductByAdmin(id:string,obj:productDataByAdmin):Observable<any>{
    return this.hobj.put<any>(environment.productUrl+'/'+id,obj)
  }
}
