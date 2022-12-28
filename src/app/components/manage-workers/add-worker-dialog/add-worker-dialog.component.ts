import { Component ,Inject,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-worker-dialog',
  templateUrl: './add-worker-dialog.component.html',
  styleUrls: ['./add-worker-dialog.component.css']
})
export class AddWorkerDialogComponent implements OnInit{

  addWorkerForm: FormGroup;
  actionButton:string="Save";
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData:any, private api:ServiceService, private dialogRef:MatDialogRef<AddWorkerDialogComponent>){}

  ngOnInit(): void {
    this.addWorkerForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      company: ['',Validators.required],
      profession: ['',Validators.required],
      comments:['',Validators.required]
    });

    if(this.editData) {
      this.actionButton = "Update";
      this.addWorkerForm.controls["firstName"].setValue(this.editData.firstName);
      this.addWorkerForm.controls["lastName"].setValue(this.editData.lastName);
      this.addWorkerForm.controls["phoneNumber"].setValue(this.editData.phoneNumber);
      this.addWorkerForm.controls["company"].setValue(this.editData.company);
      this.addWorkerForm.controls["profession"].setValue(this.editData.profession);
      this.addWorkerForm.controls["comments"].setValue(this.editData.comments);
    }
}
  addWorker(){
    if(this.editData){
      this.updateWorker();
      window.location.reload();
      
    };
    if(!this.editData){
      if(this.addWorkerForm.valid){
        this.api.postWorker(this.addWorkerForm.value).subscribe
        ({next:(res)=>{alert("worker added !")},
        error:()=>{alert("something went wrong")}});
        this.addWorkerForm.reset();
        this.dialogRef.close();// this closes the dialog after adding a new worker
        window.location.reload();
      }
    }
  }
  
  updateWorker(){
    this.api.putWorker(this.addWorkerForm.value,this.editData.id).subscribe({next:(res)=>{alert("worker updated!");
  this.addWorkerForm.reset();
  this.dialogRef.close("update");
    },
    error:()=>{alert("something went wrong")}
  
  });
}


  clear(){
    this.addWorkerForm.reset();
  }



}
