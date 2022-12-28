import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/components/manage-workers/services/service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {



  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    question: ['', Validators.required],
  });
 
  isLinear = false;

  name:string;
  address:string;
  phone:string;
  questions:string;

  constructor(private _formBuilder: FormBuilder,private api:ServiceService) {}

  send(){
    this.name = this.firstFormGroup.get('name').value;
    this.address=this.firstFormGroup.get('email').value;
    this.phone=this.firstFormGroup.get('phone').value;
    this.questions=this.firstFormGroup.get('question').value;
    console.log(this.firstFormGroup.value);

    this.api.postContact(this.firstFormGroup.value).subscribe({next:(res)=>{alert("success")},error:()=>{alert("something went wrong")}})

  }

}
