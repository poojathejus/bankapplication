import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //database
  database:any = {
  1000:{acno:1000,username:'Pooja',password:1000,balance:5000},
  1001:{acno:1001,username:'Ram',password:1001,balance:10000},
  1002:{acno:1002,username:'Sradha',password:1002,balance:3000},
  1003:{acno:1003,username:'Meera',password:1003,balance:8000},
}
  constructor() { 
    this.getDetails()
  }


  //save detials - to store  database
saveDetails()
{
  localStorage.setItem('database',JSON.stringify(this.database))
}

//getDetails

getDetails()
{
  this.database = JSON.parse(localStorage.getItem('database') || '')
}
  //register

  register(username:any,acno:any,password:any)
  {
      let database = this.database
      if(acno in database)
      {
        return false
      }
      else
      {
        database[acno]={
          acno,
          username,
          password,
          balance:0
        }
        this.saveDetails()
        return true
      }
  }

//login

login(acno:any,pswd:any){
  let userdetails = this.database
  if(acno in userdetails)
  {
    if(pswd == userdetails[acno]['password'])
    {
     return true
    }
    else
    {
      alert('Incorrect Password')
      return false
    }
  }
  else
  {
    alert('User does not exist');
    return false
  }
}


}
