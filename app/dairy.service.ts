import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  dairydataurl:any='http://localhost:3000/product'
  constructor(private hobj: HttpClient) { }
  getdiarydata(): Observable<any> {
    return this.hobj.get<any[]>(
      this.dairydataurl
    );
  }
}
