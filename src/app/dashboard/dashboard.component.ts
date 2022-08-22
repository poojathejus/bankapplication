import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit()
  {
    var acno = this.depositForm.value.acno
    var amount = this.depositForm.value.amount
    var pswd = this.depositForm.value.pswd

    if(this.depositForm.valid)
    {

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

    }
    else{
      alert('Invalid Form')
    }
  }

}
