import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tile-calculator',
  templateUrl: './tile-calculator.component.html',
  styleUrls: ['./tile-calculator.component.css']
})
export class TileCalculatorComponent implements OnInit{



 
  form:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.form= this.fb.group({
      tileHeight: new FormControl('', Validators.required),
      tileWidth: new FormControl('', Validators.required),
      pricePerm2: new FormControl('', Validators.required),
      priceOfWorkPerm2: new FormControl('', Validators.required),
      wall1Heigth: new FormControl('', ),
      wall1Width: new FormControl('', ),
      wall2Heigth: new FormControl('', ),
      wall2Width: new FormControl('', ),
      wall3Heigth: new FormControl('', ),
      wall3Width: new FormControl('', ),
      wall4Heigth: new FormControl('', ),
      wall4Width: new FormControl('', ),
      wallsTotArea:new FormControl('',),
      floorTotArea:new FormControl('', ),
      floorWidth: new FormControl('', ),
      floorLength: new FormControl('', ),
      obstacleWidth: new FormControl('',),
      obstacleLength: new FormControl('', )
      
    })
    
  }
  knowTotArea=false
  knowTotAreaFloor:boolean=false
  wallsTotalArea:number=0;
  floorTotalArea:number=0;
  tilePriceTotal:number=0;
  workPriceTotal:number=0;
  totalPrice:number=0;
  totalTiles:number=0;
  totalAreaFinal:number=0;
  totalTiles10:number=0;
  totalTiles0:number=0;
  allObstacles:number=0;
  obstacleArea:number=0;
  obstacleAreas=[];
  obstaclebiggerThanTotal:boolean=false;

  calculateAll(){
    
    this.wallsTotalArea=(this.form.value.wall1Heigth*this.form.value.wall1Width)+(this.form.value.wall2Heigth*this.form.value.wall2Width)+(this.form.value.wall3Heigth*this.form.value.wall3Width)+(this.form.value.wall4Heigth*this.form.value.wall4Width)
    this.wallsTotalArea = Math.round(this.wallsTotalArea * 100) / 100;
    this.floorTotalArea=(this.form.value.floorWidth*this.form.value.floorLength);
    this.floorTotalArea = Math.round(this.floorTotalArea * 100) / 100;
    if(this.knowTotArea===true){
      this.wallsTotalArea=this.form.value.wallsTotArea
    }

    if(this.knowTotAreaFloor===true){
      this.floorTotalArea=this.form.value.floorTotArea 
    }
    this.tilePriceTotal=this.form.value.pricePerm2*(this.wallsTotalArea+this.floorTotalArea);
    this.tilePriceTotal = Math.round(this.tilePriceTotal * 100) / 100;
    this.workPriceTotal=this.form.value.priceOfWorkPerm2*(this.wallsTotalArea+this.floorTotalArea);
    this.workPriceTotal = Math.round(this.workPriceTotal * 100) / 100;
    this.totalPrice=this.tilePriceTotal+this.workPriceTotal;
    this.totalPrice = Math.round(this.totalPrice * 100) / 100;
    this.totalTiles=(this.wallsTotalArea+this.floorTotalArea)/(this.form.value.tileWidth*this.form.value.tileHeight)
    this.totalTiles = Math.ceil(this.totalTiles);
    this.totalTiles0=this.totalTiles ;
    this.totalAreaFinal=this.floorTotalArea+this.wallsTotalArea
    this.totalAreaFinal = Math.round(this.totalAreaFinal * 100) / 100;
    

    let sum=0;
    for(let i=0; i<this.obstacleAreas.length;i++){
      sum+=this.obstacleAreas[i]
    }
    this.allObstacles=sum
    if(this.allObstacles>this.totalAreaFinal){
      this.obstaclebiggerThanTotal=true;
    }
    else{
      this.obstaclebiggerThanTotal=false;
    }
    this.totalAreaFinal = this.totalAreaFinal -this.allObstacles

  }
  KnowArea(){
    this.knowTotArea=!this.knowTotArea;
    if(this.knowTotArea===false){
      this.form.patchValue({
        wallsTotArea:"",
      
    })
  }
    else if(this.knowTotArea===true){
      this.form.patchValue({
        wall1Heigth:"",
        wall1Width:"",
        wall2Heigth:"",
        wall2Width:"",
        wall3Heigth:"",
        wall3Width:"",
        wall4Heigth:"",
        wall4Width:"",
        wall5Heigth:"",
        wall5Width:"",
     
    })
  }
}
  KnowAreafloor(){
    this.knowTotAreaFloor= !this.knowTotAreaFloor; 
    if(this.knowTotAreaFloor===false){
      this.form.patchValue({

      floorTotArea:""
    })
    }
    else if(this.knowTotAreaFloor===true){
      this.form.patchValue({
      floorWidth:"",
      floorLength:"",
     
    })
    }
    
    
  }
  addObstacle(){
    
    this.obstacleArea=this.form.value.obstacleLength*this.form.value.obstacleWidth
    this.obstacleArea=Math.round(this.obstacleArea*100)/100
    this.obstacleAreas.push(this.obstacleArea)
    this.obstacleArea=0

    this.form.patchValue({
      obstacleWidth:"",
      obstacleLength:"",
    })
    
  }
  removeObstacle(i){
    this.obstacleAreas.splice(i,1)
    console.log(this.obstacleAreas)
  }
  add10percent=false;
  add10(){
    this.add10percent=!this.add10percent
    if(this.add10percent==true){
      this.totalTiles10=this.totalTiles*0.1
      this.totalTiles+=this.totalTiles10
    }
    if(this.add10percent==false){
      this.totalTiles=this.totalTiles0
    }
  }

  clear(){
    this.form.reset();
    this.obstacleAreas=[]
  }

  openDialog(){
    
  }


}
