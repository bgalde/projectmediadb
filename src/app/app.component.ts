import { Component, OnInit } from '@angular/core';
import { AppService } from './app-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ProjectMediaDB';
  private data;
  private items = [];
  constructor(private appService: AppService) {
    this.data = this.appService.getAllTables();
  }
}
