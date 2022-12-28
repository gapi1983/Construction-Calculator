import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder} from '@angular/forms';
import { ServiceService } from 'src/app/components/manage-workers/services/service.service';

@Component({
  selector: 'app-const-log',
  templateUrl: './const-log.component.html',
  styleUrls: ['./const-log.component.css']
})


export class ConstLogComponent {
  form: FormGroup;
  constructor(private api:ServiceService, private fb:FormBuilder){

  this.form = this.fb.group({
    projectData:fb.group({
      organisation:new FormControl('',[Validators.required]),
      project: new FormControl('', [Validators.required]),
      contractor:new FormControl('', [Validators.required]),
      date: new FormControl(""),
    }),
    weather:fb.group({
      temperature:new FormControl('',[Validators.required]),
      weather:new FormControl('',[Validators.required]),
      groundConditions:new FormControl('',[Validators.required]),
    }),
    contractorsWorkers:fb.group({
      category:new FormControl(''),
      numberOfWorkers:new FormControl(''),
      comments:new FormControl(''),
    }),
    subcontractorsWorkers:fb.group({
      category:new FormControl(''),
      numberOfWorkers:new FormControl(''),
      comments:new FormControl(''),
    }),
    hiredWorkers:fb.group({
      category:new FormControl(''),
      numberOfWorkers:new FormControl(''),
      comments:new FormControl(''),
    }),
    machinery:fb.group({
      machineryOnSite:new FormControl("")
    })

  })
}

  show:boolean=false;
  addContractorsMen(){
    this.show=true;
    
    
  }
  addContractorMen(){
  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addAll(){
    this.api.postLog(this.form.value).subscribe({next:(res)=>{alert("Log successfully added")},error:()=>{alert("something went wrong")}})
    console.log(this.form.value);
    this.form.reset();
    
  }

  
  addMachinery(){
    
  }
  

  addHiredWorkers(){
    console.log(this.form.value.hiredWorkers)
    
    this.form.value.hiredWorkers=""
  }
 //this.form.patchValue({

}
