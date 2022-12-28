import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ConstLogComponent } from './components/const-log/const-log.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CalculatorsComponent } from './components/calculators/calculators.component';
import { TileCalculatorComponent } from './components/calculators/tile-calculator/tile-calculator.component';
import { BrickCalculatorComponent } from './components/calculators/brick-calculator/brick-calculator.component';
import { ExcavationCalculatorComponent } from './components/calculators/excavation-calculator/excavation-calculator.component';
import { AsphaltCalculatorComponent } from './components/calculators/asphalt-calculator/asphalt-calculator.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ManageWorkersComponent } from './components/manage-workers/manage-workers.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AddWorkerDialogComponent } from './components/manage-workers/add-worker-dialog/add-worker-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';










@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConstLogComponent,
    CalculatorsComponent,
    TileCalculatorComponent,
    BrickCalculatorComponent,
    ExcavationCalculatorComponent,
    AsphaltCalculatorComponent,
    ContactUsComponent,
    ManageWorkersComponent,
    AddWorkerDialogComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatStepperModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatTabsModule,
    MatSlideToggleModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    CommonModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
