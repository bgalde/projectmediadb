// import our angular things
import { Component, OnChanges, SimpleChanges, OnInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatDialog, MatTable } from '@angular/material';
import { URLSearchParams } from '@angular/http';


// import our service for the app
import { AppService } from './app-service.service';
import { DialogComponent } from './dialog/dialog.component';
import { BlankDialogComponent } from './blank-dialog/blank-dialog.component';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  @ViewChild(MatTable) table: MatTable<any>;
  title = 'ProjectMediaDB';
  private data;

  private tableData: any=[];
  public displayedColumns: any=[];
  public dataSource: any=[];
  public rowData: any=[];
  public url;
  private count = 0;
  private show = "true";

  constructor(public dialog: MatDialog, private appService: AppService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  // Function to populate table on web app
  tableSelect(value:string) {
    if (value != "Table to Query") {
      this.appService.getTable(value);

     this.dataSource = [];
     this.displayedColumns = [];
     this.tableData = [];

     this.appService.results.subscribe(res=> { 
      for (let v in res) {
        this.tableData.push(res[v]);
      }
    })

    this.appService.columns.subscribe(col=> { 
      for (let v in col) {
        this.displayedColumns.push(col[v].Field);
      }
    });

    this.dataSource = new MatTableDataSource(this.tableData);
    setTimeout(() => {}, 2000);
    }
  }

  openDialog($event, row) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '80%',
      width: '40%',
      data: row
    });


    dialogRef.afterClosed().subscribe(result => {
      this.appService.editTable(result);
      for(let v in result){
           this.tableData.push(result[v]);
      }
      this.dataSource = new MatTableDataSource(this.tableData);
      setTimeout(() => {}, 2000);
      this.refresh();
    });
    
  }

  openEmptyDialog($event) {
    const dialogRef = this.dialog.open(BlankDialogComponent, {
      height: '80%',
      width: '40%',
      data:{}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.appService.editTable(result);
      for(let v in result){
            this.tableData.push(result[v]);
      }
      this.dataSource = new MatTableDataSource(this.tableData);
      setTimeout(() => {}, 2000);
      this.refresh();
    });
  }

  refresh() {
    setTimeout(() => {}, 2000);
    this.tableSelect(this.appService.table);
    this.changeDetectorRefs.detectChanges();
  }

// Run this function when the web app loads
  ngOnInit(){
    this.data = this.appService.getAllTables();
  }
}

