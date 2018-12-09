import { Component, OnChanges, SimpleChanges, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
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
  dataSource = new DisplayTablesDataSource();
  private row;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'type', 'year'];

  constructor(public dialog: MatDialog, private appService: AppService) {}

  ngOnInit() {
    this.dataSource = new DisplayTablesDataSource(this.paginator, this.sort, this.appService);
    console.log();
    // this.dataSource.tableData = this.appService.getResults();
  }

  openDialog(event, row) {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '90%',
      width: '70%',
      data: {
       // row = "This row was picked: " + row,
      }
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
