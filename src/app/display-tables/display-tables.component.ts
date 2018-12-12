import { Component, OnChanges, SimpleChanges, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { DisplayTablesDataSource } from './display-tables-datasource';
import { AppService } from '../app-service.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-display-tables',
  templateUrl: './display-tables.component.html',
  styleUrls: ['./display-tables.component.css'],
})
export class DisplayTablesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private row;
  public dataSource;
  public results: Observable<any>;
  public columns: Observable<any>;
  public displayedColumns: any=[];
  public data: any=[];


  constructor(public dialog: MatDialog, private appService: AppService) {}

  ngOnInit() {
<<<<<<< HEAD
    this.dataSource = [] //TABLE DATASOURCE

    //GET SOMETHING FROM SERVICE 
    this.appService.results.subscribe(res=> { 
      this.results=res; 
      for (let v in res) {
        this.data.push(res[v]);
      }
      console.log(this.data);
    })

    this.appService.columns.subscribe(col=> { 
      for (let v in col) {
        this.displayedColumns.push(col[v].Field);
      }
      console.log(this.displayedColumns);
    } ) ;

    this.dataSource = new MatTableDataSource(this.data);

=======
    this.dataSource = new DisplayTablesDataSource(this.paginator, this.sort, this.appService);
    console.log();
    this.refresh();
    // this.dataSource.tableData = this.appService.getResults();
>>>>>>> 002cfc719f52eb95137e8a35b189f72300c55391
  }

  openDialog(event, row) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '90%',
      width: '70%',
      data: row
    });

    console.log("This record was clicked: " + JSON.stringify(row));

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
    
  }
    /*
    this.tableData = this.appService.getTable(value).subscribe(
      value => console.log(JSON.stringify(value));
    );
    */

} 
