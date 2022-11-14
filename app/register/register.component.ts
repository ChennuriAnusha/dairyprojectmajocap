import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent implements OnInit {
    UserRegistrationForm = new FormGroup({
      username:new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.email, Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  

    constructor(private router:Router,private ActivatedRoute:ActivatedRoute,public apiservice:UserdataService) {

    }
  
    ngOnInit(): void {
    }
  
    OnSubmit(){
     if(this.UserRegistrationForm.valid ){
       console.log(this.UserRegistrationForm.value)
       this.apiservice.registerNewuser(this.UserRegistrationForm.value).subscribe((res) => {
        if(res && res['status'] === 'ok' && res['data']['_id']){
          this.router.navigate(['/signin']);
        }
      }, (err)=> {
        if(err){
          console.log('we got an error in signup')
        }
      })
     }
    }
  }
  


