import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //form group
  depositForm = this.formBuilder.group({
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  withdrawForm = this.formBuilder.group({
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

//current user
user:any;
  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.user = this.dataService.currentuser
    if(! localStorage.getItem('currentacno'))
    {
      alert('please log in')
      this.router.navigateByUrl('')

    }
  }

  deposit()
  {
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid)
    {
      const result = this.dataService.deposit(acno,pswd,amount)
      if(result)
      {
        alert(`${amount} deposited successfully and New balance is ${result}`)
      }
    }
    else{
      alert('Invalid Form')
    }
  }
  withdraw()
  {
    var acno = this.withdrawForm.value.acno
    var amount = this.withdrawForm.value.amount
    var pswd = this.withdrawForm.value.pswd
    if(this.withdrawForm.valid)
    {
      const result = this.dataService.withdraw(acno,pswd,amount)
      if(result)
      {
        alert(`${amount} debited successfully and New balance is ${result}`)
      }
    }
    else{
      alert('Invalid Form')
    }
  }

  logout()
  {
    localStorage.removeItem('currentacno')
    localStorage.removeItem('currentuser')
    this.router.navigateByUrl('')
  }
}
