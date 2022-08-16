import { Component, OnInit } from '@angular/core';

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
//database
database:any = {
  1000:{acno:1000,username:'Pooja',password:1000,balance:5000},
  1001:{acno:1001,username:'Ram',password:1001,balance:10000},
  1002:{acno:1002,username:'Sradha',password:1002,balance:3000},
  1003:{acno:1003,username:'Meera',password:1003,balance:8000},
}

//constructor - execute first when class run, to initialize obj
  constructor() { }

//a lifecycle hook - exexcute secondly
  ngOnInit(): void {
  }


//user defined function
acnochange(event:any)
{
  this.acno = event.target.value

  
}
pswdchange(event:any)
{
  this.pswd = event.target.value
 
  
}
login(){
  var acno = this.acno
  var pswd = this.pswd

  let userdetails = this.database
  if(acno in userdetails)
  {
    if(pswd == userdetails[acno]['password'])
    {
      alert('Login successfully')
    }
    else
    {
      alert('Incorrect Password')
    }
  }
  else
  {
    alert('User does not exist');
  }
}
}

