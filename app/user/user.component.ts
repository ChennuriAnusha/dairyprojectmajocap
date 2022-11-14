import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DairyService } from '../dairy.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private rote:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   
    }
  OnLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
    this.rote.navigateByUrl('/home')
    this._snackBar.open("LogOut Successful",'Undo', {
      duration: 3000
    });
  }
   
}
