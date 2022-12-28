import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl,NgForm, FormArray } from '@angular/forms';

@Component({
  selector: 'app-asphalt-calculator',
  templateUrl: './asphalt-calculator.component.html',
  styleUrls: ['./asphalt-calculator.component.css']
})
export class AsphaltCalculatorComponent implements OnInit {

  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      length: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required),
      depth: new FormControl('', Validators.required),
      units: new FormControl('', Validators.required),
      pricePerTon: new FormControl('', Validators.required),
    });
  }

  totPrice=0;
  totVol=0;
  activeUnit="m3"
  totalQuantity=0;
  calculate(){
    if(this.form.value.units=="ft3"){
      this.activeUnit="ft3"
    }
    else{
      this.activeUnit="m3"
    }
    if(this.activeUnit==="ft3"){
      this.totVol=this.form.value.length*this.form.value.width*this.form.value.depth;
      this.totVol=this.totVol*0.0283168466; // converted to m3
      this.totalQuantity=this.totVol*2322;// kg
      this.totalQuantity=this.totalQuantity/1000// ton
      this.totPrice=this.form.value.pricePerTon*this.totalQuantity;
      this.totPrice=Math.round(this.totPrice*100)/100;

    

    }
    if(this.activeUnit==="m3"){
    this.totVol=this.form.value.length*this.form.value.width*this.form.value.depth
    this.totalQuantity=this.totVol*2322;// kg
    this.totalQuantity=this.totalQuantity/1000// ton
    this.totalQuantity=Math.round(this.totalQuantity*100)/100;
    this.totPrice=this.form.value.pricePerTon*this.totalQuantity;
    this.totPrice=Math.round(this.totPrice*100)/100;


    }

  }
  switch(){
    if(this.activeUnit==="m3"){
      this.totVol=this.totVol*35.3147
      this.totVol=Math.round(this.totVol*100)/100;
      this.totalQuantity=this.totVol*2322;// kg
      this.totalQuantity=this.totalQuantity/1000// ton
      this.activeUnit="ft3";
    }
    else if (this.activeUnit==="ft3"){
      this.totVol=this.totVol/35.3147
      this.totVol=Math.round(this.totVol*100)/100;
      this.totalQuantity=this.totVol*2322;// kg
      this.totalQuantity=this.totalQuantity/1000// ton
      this.activeUnit="m3";
    }
  }
  clear(){
    this.form.reset();
  }
}