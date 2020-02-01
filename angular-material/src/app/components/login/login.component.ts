import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  error:string;
  constructor(private formBuilder:FormBuilder,private router:Router,private dataService:DataService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
        'username':[null,Validators.required],
        'password':[null,Validators.required]
    })
  }

  onSubmit()
  {
      this.dataService.login(this.form.value).subscribe(
        (response)=>{
          console.log(response);
          this.router.navigate(["home"]);
        },
        (error)=>{
          if(error instanceof HttpErrorResponse){
            this.error=error.error.error;
           }
          this.router.navigate(["/"]);
        }
      );;
  }

}
