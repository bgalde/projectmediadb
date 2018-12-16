import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() inputData;
  private fields: any=[];
  private title;
  public modal_state;
  private show;
  
  constructor(public dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data, private appService: AppService) {

   }

  
   ngOnInit() {
    this.appService.columns.subscribe(col=> { 
      for (let v in col) {
        this.fields.push(col[v].Field);
      }
    });
    this.title = this.appService.table;
  }

  update(): void {
    this.appService.setModalState("update");
    this.dialogRef.close(this.data);
    //save the document,

  }

  delete(): void {
    this.appService.setModalState("delete");
    this.dialogRef.close(this.data);
    //delete the document,
  }

  close(): void {
    this.dialogRef.close();
  }

}
