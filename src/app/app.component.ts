// import our angular things
import { Component, OnChanges, SimpleChanges, OnInit, Inject, ChangeDetectorRef, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatDialog, MatTable } from '@angular/material';
import { URLSearchParams } from '@angular/http';


// import our service for the app
import { AppService } from './app-service.service';
import { DialogComponent } from './dialog/dialog.component';

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

  constructor(public dialog: MatDialog, private appService: AppService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  // Function to populate table on web app
  tableSelect(value:string) {
    if (value != "Table to Query") {
      console.log(value + ' was selected.');
      this.appService.getTable(value);

     this.dataSource = [];
     this.displayedColumns = [];
     this.tableData = [];

     this.appService.results.subscribe(res=> { 
      for (let v in res) {
        this.tableData.push(res[v]);
      }
    })

    console.log(this.tableData);
    this.appService.columns.subscribe(col=> { 
      for (let v in col) {
        this.displayedColumns.push(col[v].Field);
      }
    });

    console.log(this.displayedColumns);
    this.dataSource = new MatTableDataSource(this.tableData);

    }
  }

  openDialog(event, row) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '100%',
      width: '30%',
      data: row
    });

    console.log("This record was clicked: " + JSON.stringify(row));

    dialogRef.afterClosed().subscribe(result => {
      this.appService.editTable(result);
      for(let v in result){
           console.log(JSON.stringify(v) + " " + JSON.stringify(result[v]));
           this.tableData.push(result[v]);
      }
      this.dataSource = new MatTableDataSource(this.tableData);
      this.refresh();
    });
    
  }

  refresh() {
    this.tableSelect(this.appService.table);
    this.changeDetectorRefs.detectChanges();
  }
  openEmptyDialog($event) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '90%',
      width: '70%',
      data: {
       
      }
    });

    
    /*
    dialogRef.afterClosed().subscribe(result => {
      this.url = "http://projectmediadb.ddns.net:8180/api/db/"
      for(let i in result){
        if(this.count == 0){
          this.columns += i; 
          this.res += result[i];
        } else {
          this.columns += "+" + i;
          this.res += "+" + result[i];
        }
        this.count++;
      }

      //<<<< http://projectmediadb.ddns.net:8180/api/db/books/ insert/function replace() { [native code] }/%202+4+test+45+34+test+test
      switch(this.appService.modal_state){
        case "insert":
            console.log("<<<< " + this.url + this.appService.table + "/insert/"
                 + this.columns + "/" + this.res.replace(/\s/g, "%20"));
           // return this.url + this.appService.table + "/" this.appService.modal_state + "/" + this.columns.replace + "/" + this.res.replace("", "%20")
            break;
        case "delete":
            console.log(">>>> " + this.url + this.appService.table + "/delete/");
           // return this.url + this.appService.table + "/" this.appService.modal_state;
            break;
        default:
            break;
      }
    });
    */
  dialogRef.afterClosed().subscribe(result => {
   this.appService.editTable(result);
   for(let v in result){
        console.log(JSON.stringify(v) + " " + JSON.stringify(result[v]));
        this.tableData.push(result[v]);
   }
   this.dataSource = new MatTableDataSource(this.tableData);
   this.refresh();
  });

  }
  // Run this function when the web app loads
  ngOnInit(){
    this.data = this.appService.getAllTables();

  }
}
