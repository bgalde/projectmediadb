import { Component, OnInit } from '@angular/core';
import { AppService } from './app-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ProjectMediaDB';
  private data;

  constructor(private appService: AppService) {
  }

  tableSelect(value:string) {
    if value != "Table to Query"{
      console.log(value + ' was selected.');
    }
  }

  ngOnInit(){
    this.data = this.appService.getAllTables();

  }

}
