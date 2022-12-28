import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl,NgForm, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excavation-calculator',
  templateUrl: './excavation-calculator.component.html',
  styleUrls: ['./excavation-calculator.component.css']
})
export class ExcavationCalculatorComponent implements OnInit {
  
  form:FormGroup;

  ngOnInit(){
    this.form=new FormGroup({
      length: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required),
      depth: new FormControl('', Validators.required),
      units: new FormControl('', Validators.required),
      excPrice:new FormControl('', Validators.required),
      remPrice:new FormControl('', Validators.required),
    })
  }

  totPrice=0;
  totVol=0;
  activeUnit="m3"
  
  calculate(){

    if(this.form.value.units=="ft3"){
      this.activeUnit="ft3"
    }
    else{
      this.activeUnit="m3"
    }

    console.log(this.form.value);
    this.totVol=this.form.value.length*this.form.value.width*this.form.value.depth;
    this.totVol=Math.round(this.totVol*100)/100;
    this.totPrice=this.form.value.excPrice*this.totVol+this.form.value.remPrice*this.totVol
    this.totPrice=Math.round(this.totPrice*100)/100;
  }

  switch(){
    if(this.activeUnit==="m3"){
      this.totVol=this.totVol*35.3147
      this.totVol=Math.round(this.totVol*100)/100;
      this.activeUnit="ft3";
    }
    else{
      this.totVol=this.totVol/35.3147
      this.totVol=Math.round(this.totVol*100)/100;
      this.activeUnit="m3";
    }
  }
  clear(){
    this.form.reset();
  }

}



