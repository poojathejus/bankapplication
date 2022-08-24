import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //current user

  currentuser:any;

  currentacno:any;
  //database
  database:any = {
  1000:{acno:1000,username:'Pooja',password:1000,balance:5000,transaction:[]},
  1001:{acno:1001,username:'Ram',password:1001,balance:10000,transaction:[]},
  1002:{acno:1002,username:'Sradha',password:1002,balance:3000,transaction:[]},
  1003:{acno:1003,username:'Meera',password:1003,balance:8000,transaction:[]},
}
  constructor() { 
  this.getDetails()
  }


  //save detials - to store  database
saveDetails()
{
  localStorage.setItem('database',JSON.stringify(this.database))
  if(this.currentuser)
  {
    localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
  }
  if(this.currentacno)
  {
    localStorage.setItem('currentacno',JSON.stringify(this.currentacno))
  }
}

//getDetails

getDetails()
{
  this.database = JSON.parse(localStorage.getItem('database') || '')
  if(localStorage.getItem('currentuser'))
  {
    this.currentuser = JSON.parse(localStorage.getItem('currentuser') || '')

  }
  if(localStorage.getItem('currentacno'))
  {
    this.currentacno = JSON.parse(localStorage.getItem('currentacno') || '')

  }

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
          balance:0,
          transaction:[]
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
      this.currentuser = userdetails[acno]['username']
      this.currentacno =acno
      this.saveDetails()
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

//deposit

deposit(acno:any,pswd:any,amt:any)
{
  let userdetails = this.database
  const amount = parseInt(amt)
  if(acno in userdetails)
  {
    if(pswd == userdetails[acno]['password'])
    {
      userdetails[acno]['balance'] += amount
      userdetails[acno]['transaction'].push({
        type:'CREDIT',
        amount
      })
      this.saveDetails()
      return userdetails[acno]['balance'] 
    }
    else
    {
      alert('Incorrect Password')
      return false
    }
  }
  else{
    alert('User does not exist');
    return false
  }
}

withdraw(acno:any,pswd:any,amt:any)
{
  let userdetails = this.database
  const amount = parseInt(amt)
  if(acno in userdetails)
  {
    if(pswd == userdetails[acno]['password'])
    {
      if(userdetails[acno]['balance'] > amount)
      {
        userdetails[acno]['balance'] -= amount
        userdetails[acno]['transaction'].push({
          type:'DEBIT',
          amount
        })
        this.saveDetails()
        return userdetails[acno]['balance'] 
      }
      else{
        alert('Insufficient balance')
      }
     
    }
    else
    {
      alert('Incorrect Password')
      return false
    }
  }
  else{
    alert('User does not exist');
    return false
  }
}

gettransaction(acno:any)
{
  return this.database[acno].transaction
}
}
