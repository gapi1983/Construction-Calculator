import { CalculatorsComponent } from './components/calculators/calculators.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstLogComponent } from './components/const-log/const-log.component';
import { TileCalculatorComponent } from './components/calculators/tile-calculator/tile-calculator.component';
import { BrickCalculatorComponent } from './components/calculators/brick-calculator/brick-calculator.component';
import { ExcavationCalculatorComponent } from './components/calculators/excavation-calculator/excavation-calculator.component';
import { AsphaltCalculatorComponent } from './components/calculators/asphalt-calculator/asphalt-calculator.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {ManageWorkersComponent} from './components/manage-workers/manage-workers.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"const-log",component:ConstLogComponent },
  {path:"home",component:HomeComponent},
  {path:"calculators",component:CalculatorsComponent},
  {path:"tile-calc",component:TileCalculatorComponent},
  {path:"brick-calc",component:BrickCalculatorComponent},
  {path:"exc-calc",component:ExcavationCalculatorComponent},
  {path:"asphalt-calc",component:AsphaltCalculatorComponent},
  {path:"manage-workers",component:ManageWorkersComponent},
  {path:"contact-us",component:ContactUsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
