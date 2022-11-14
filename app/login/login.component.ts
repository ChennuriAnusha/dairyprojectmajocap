import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  k: any;
  LoginUserForm: FormGroup;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private ActivatedRoute: ActivatedRoute,
    public apiService: UserdataService
  ) {
    this.LoginUserForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
  }
  OnSubmit() {
    if (
      this.LoginUserForm.value.email === 'admin@gmail.com' &&
      this.LoginUserForm.value.password === 'admin'
    ) {
      this.router.navigateByUrl('/admin');
    } else if (this.LoginUserForm.valid) {
      this.apiService.login(this.LoginUserForm.value).subscribe(
        (res) => {
          if (res && res['status'] === 'ok' && res['data']['response'] &&res['data']['authToken']) {
            localStorage.setItem('token', res['data']['authToken']);
            localStorage.setItem('userdetails',JSON.stringify(res['data']['existUser'])
            );
            console.log('Logging In');

            this.k = localStorage.getItem('userdetails');
            this.k = JSON.parse(this.k);
            console.log(this.k._id);
            //this.router.navigateByUrl('/admin')
            this.router.navigateByUrl('user/' + this.k._id);
            this._snackBar.open("Login Successful",'Undo', {
              duration: 3000
            });
          }
        },
        (err) => {
          console.log('we got an error in sign');
        }
      );
      console.log(this.LoginUserForm.value);
    } else {
      alert('Invalid Credentials');
    }
  }
}
