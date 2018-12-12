// import our angular things
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


// import our service for the app
import { AppService } from './app-service.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ProjectMediaDB';
  private data;
<<<<<<< HEAD
  private tableData: any=[];
  public displayedColumns: any=[];
  public dataSource: any=[];

=======
  private tableData;
  public newTitle;
>>>>>>> 002cfc719f52eb95137e8a35b189f72300c55391

  constructor(public dialog: MatDialog, private appService: AppService) {
  }

  // Function to populate table on web app
  tableSelect(value:string) {
    if (value != "Table to Query") {
      console.log(value + ' was selected.');
      this.appService.getTable(value);
      /*
      this.tableData = this.appService.getTable(value).subscribe(
        value => console.log(JSON.stringify(value));
      );
      */
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
    } ) ;

    console.log(this.displayedColumns);
    this.dataSource = new MatTableDataSource(this.tableData);

    }
  }
  openEmptyDialog($event) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '90%',
      width: '70%',
      data: {
       
      }
    });

    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
    
  }
  // Run this function when the web app loads
  ngOnInit(){
    this.data = this.appService.getAllTables();

  }

}
