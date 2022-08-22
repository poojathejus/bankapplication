import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


//property or variable
header ="Welcome to our Bank"
dot = "..."
accplaceholder = "Account Please"
acno=""
pswd=""

//form group
loginForm = this.formBuilder.group({
  //0 or more time *
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

//database
// database:any = {
//   1000:{acno:1000,username:'Pooja',password:1000,balance:5000},
//   1001:{acno:1001,username:'Ram',password:1001,balance:10000},
//   1002:{acno:1002,username:'Sradha',password:1002,balance:3000},
//   1003:{acno:1003,username:'Meera',password:1003,balance:8000},
// }

//constructor - execute first when class run, to initialize obj
  constructor(private router:Router, private dataService:DataService,private formBuilder:FormBuilder) { }

//a lifecycle hook - exexcute secondly
  ngOnInit(): void {
  }


//user defined function
// acnochange(event:any)
// {
//   this.acno = event.target.value

  
// }
// pswdchange(event:any)
// {
//   this.pswd = event.target.value
 
  
// }
// login(){
//   var acno = this.acno
//   var pswd = this.pswd

//   let userdetails = this.database
//   if(acno in userdetails)
//   {
//     if(pswd == userdetails[acno]['password'])
//     {
//       alert('Login successfully')
//     }
//     else
//     {
//       alert('Incorrect Password')
//     }
//   }
//   else
//   {
//     alert('User does not exist');
//   }
// }

// login(a:any,p:any){
//   var acno = a.value
//   var pswd = p.value

//   let userdetails = this.database
//   if(acno in userdetails)
//   {
//     if(pswd == userdetails[acno]['password'])
//     {
//       alert('Login successfully')
//     }
//     else
//     {
//       alert('Incorrect Password')
//     }
//   }
//   else
//   {
//     alert('User does not exist');
//   }
// }


login(){
    // var acno = this.acno
    // var pswd = this.pswd

    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    



    if(this.loginForm.valid)
    {
      const result = this.dataService.login(acno,pswd)
      if(result)
      {
      alert('Login Successfull')
      this.router.navigateByUrl('dashboard')
      }
     
    }
    else
    {
      alert('Invalid Form')
    }
    
  
    // let userdetails = this.database
    // if(acno in userdetails)
    // {
    //   if(pswd == userdetails[acno]['password'])
    //   {
    //     alert('Login successfully')
    //     //navigate to dashboard
    //     this.router.navigateByUrl('dashboard')

    //   }
    //   else
    //   {
    //     alert('Incorrect Password')
    //   }
    // }
    // else
    // {
    //   alert('User does not exist');
    // }
  }
}

