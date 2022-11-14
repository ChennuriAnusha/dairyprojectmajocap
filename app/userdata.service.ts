import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private hobj:HttpClient) { }

//for modifying quantity in cart page and pushing added products to cart
  addProductToCart(id:string,obj:object):Observable<any>{
    return this.hobj.put<any>(environment.userUrl+'/'+id,obj)
  }

//when you register with a new user
  registerNewuser(userData:any):Observable<any>{
    return this.hobj.post(environment.registerurl,userData)
  }

  //login with a existing user
  login(userData:any):Observable<any>{
    return this.hobj.post(environment.loginUrl,userData)
  }

//after login in order to get paticular users profile
  getIndivdualUser(id:String):Observable<any>{
    return this.hobj.get(environment.userUrl+'/'+id)
  }




  //get previous orders of individual users
  getPrevOrdersByUser(userId:string):Observable<any>{
    return this.hobj.get(environment.IndUserPrevUrl+'/'+userId)
  }
  
}
