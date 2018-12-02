// import our angular things
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

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
  private tableData;

  constructor(public dialog: MatDialog, private appService: AppService) {
  }

  // Function to populate table on web app
  tableSelect(value:string) {
    if (value != "Table to Query") {
      console.log(value + ' was selected.');
      this.tableData = this.appService.getTable(value);
    }
  }
  
  // Run this function when the web app loads
  ngOnInit(){
    this.data = this.appService.getAllTables();
  }

}
