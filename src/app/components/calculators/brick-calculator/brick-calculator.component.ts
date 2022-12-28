import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-brick-calculator',
  templateUrl: './brick-calculator.component.html',
  styleUrls: ['./brick-calculator.component.css']
})
export class BrickCalculatorComponent implements OnInit {

  form:FormGroup;

  ngOnInit(){
    this.form=new FormGroup({
      length: new FormControl('',Validators.required),
      height:new FormControl('',Validators.required),
      wallThicknes:new FormControl('',Validators.required),
      ratio:new FormControl('',Validators.required),
      //brick size
      brickLength:new FormControl('',Validators.required),
      brickWidth:new FormControl('',Validators.required),
      brickHeight:new FormControl('',Validators.required),
    })
  }
  volume:number=0
  brickSize:number=0;
  brickMortarSize:number=0;
  numOfBricks:number=0;
  brickLengthM:number=0;
  brickWidthM:number=0;
  brickHeightM:number=0;
  actualVolOfBricksMortar:number=0;
  mortarQuantity:number=0;
  // ratio
  cement:number=0;
  sand:number=0
  // cement bags
  bagOfCement:number=0.035 // m3
  bags:number=0;
  numOfCementBags:number=0;
  numOfCementBagsKg:number=0;

  calculate(){
    //volume
    this.volume=this.form.value.length*this.form.value.height*(this.form.value.wallThicknes/100)
    this.volume=Math.round(this.volume*100)/100;
    console.log(this.volume)
    //brick size
    this.brickLengthM=this.form.value.brickLength/100
    this.brickWidthM=this.form.value.brickHeight/100
    this.brickHeightM=this.form.value.brickWidth/100
    this.brickSize=this.brickLengthM*this.brickWidthM*this.brickHeightM
    console.log("brickSize: "+this.brickSize)
    // size of brick with mortar (malta ) avrage mortar thicness 1 cm
    this.brickMortarSize=(this.brickLengthM+0.01)*(this.brickWidthM+0.01)*(this.brickHeightM+0.01)
    console.log(this.brickMortarSize)
    // number of bricks
    this.numOfBricks=this.volume/this.brickMortarSize
    this.numOfBricks=Math.ceil(this.numOfBricks);
    console.log( "number of bricks: "+this.numOfBricks)
    // mortar quantity
    let actualVolOfBricksMortar= this.numOfBricks*this.brickSize;
    console.log("actualVolOfBricksMortar: "+actualVolOfBricksMortar)
    this.mortarQuantity=this.volume-actualVolOfBricksMortar
    console.log("mortarQuantity: "+this.mortarQuantity)
    // add 15% wastage and 25% dry volume
    this.mortarQuantity+=this.mortarQuantity*0.15;
    this.mortarQuantity+=this.mortarQuantity*0.25;
    console.log("mortarQuantity: "+this.mortarQuantity) // final mortar quantity
    //ratio
    if(this.form.value.ratio==="1:3"){
      this.cement=1/4*this.mortarQuantity
      this.sand=3/4*this.mortarQuantity
    }
    else if (this.form.value.ratio==="1:4"){
      this.cement=1/5*this.mortarQuantity
      this.sand=4/5*this.mortarQuantity
    }
    else if (this.form.value.ratio==="1:5"){
      this.cement=1/6*this.mortarQuantity
      this.sand=5/6*this.mortarQuantity
    }
    else if (this.form.value.ratio==="1:6"){
      this.cement=1/7*this.mortarQuantity
      this.sand=6/7*this.mortarQuantity
    }
    else{
      alert("wrong ratio !")
    }
    // amout of cement // 1 bag of cement = 0.034722 m3 => 0.035 m3 (1 bag weighs 50 kg)
    this.numOfCementBags= this.cement/this.bagOfCement;
    this.numOfCementBagsKg=this.numOfCementBags*50;
    
    console.log("numOfCementBags: "+this.numOfCementBags)

    this.bags=this.numOfCementBagsKg/50;
    
    this.bags=Math.ceil(this.bags);
  
    //sand (dry volume of sand = 1500kg/m3)
    this.sand=this.sand*1500
    this.sand=this.sand/1000
    this.sand=Math.round(this.sand*100)/100;
    console.log("sand: " +this.sand)


  }
  clear(){
    this.form.reset();
  }

}
