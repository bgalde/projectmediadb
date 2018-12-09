import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../app-service.service';
import { DisplayTablesComponent } from './display-tables.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() data: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, private appService: AppService) {

   }

  ngOnInit() {
  }

  save(): void {
    this.dialogRef.close("It was saved");
    //save the document

  }

}
