import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // uname=""
  // acno=""
  // pswd=""


//form group
registerForm = this.formBuilder.group({
  //0 or more time *
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private router:Router , private dataService:DataService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


 register()
 {
    var acno = this.registerForm.value.acno
    var uname = this.registerForm.value.uname
    var pswd = this.registerForm.value.pswd

    if(this.registerForm.valid)
    {
      const result =this.dataService.register(uname,acno,pswd)

      if(result)
      {
        alert('Registered Successfully')
        this.router.navigateByUrl('')
      }
      else
      {
        alert('user already exist!! please log in')
      }
    }
    else{
      alert('Invalid Form')
    }
    
 }
}
