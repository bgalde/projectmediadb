import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-blank-dialog',
  templateUrl: './blank-dialog.component.html',
  styleUrls: ['./blank-dialog.component.css']
})
export class BlankDialogComponent implements OnInit {
  @Input() inputData;
  private fields: any=[];
  private title;
  public modal_state;
  private show;
  
  constructor(public dialogRef: MatDialogRef<BlankDialogComponent>, 
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


  insert(): void {
    this.appService.setModalState("insert");
    this.dialogRef.close(this.data);
    //save the document,
  }
}