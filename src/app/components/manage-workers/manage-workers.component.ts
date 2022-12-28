import { AddWorkerDialogComponent } from './add-worker-dialog/add-worker-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from './services/service.service';
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-manage-workers',
  templateUrl: './manage-workers.component.html',
  styleUrls: ['./manage-workers.component.css']
})
export class ManageWorkersComponent implements OnInit {

  constructor(public dialog: MatDialog, private api:ServiceService,) {}
  ngOnInit(): void {
    this.getAllWorkers()
  }

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'FirstName', 'LastName', 'PhoneNumber',"Company","Profession","Comments","Action"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  

  openDialog() {
    this.dialog.open(AddWorkerDialogComponent,{
      width:"25%",
      height:"75%"

    });
  }
  getAllWorkers(){
    return this.api.getWorkers().subscribe({next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
  error:(err)=>{
    alert("error has occured while fetching workers");
    }});
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editWorker(row:any){
    this.dialog.open(AddWorkerDialogComponent,{
      width:"25%",
      height:"75%",
      data:row
  })
}

  deleteWorker(id:number){
    this.api.deleteWorker(id).subscribe({
      next:(res)=>{
        alert("Worker deleted successfully");
        window.location.reload();
      },
      error:(err)=>{
        alert("worker deleted");
      }
    })
  }
}
  

  
