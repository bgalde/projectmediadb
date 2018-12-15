import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppService } from './app-service.service';
//import { DisplayTablesComponent } from './display-tables/display-tables.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { BlankDialogComponent } from './blank-dialog/blank-dialog.component';

@NgModule({ 
  declarations: [
    AppComponent,
    //DisplayTablesComponent,
    DialogComponent,
    BlankDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
  ],
  entryComponents: [
    DialogComponent,
    BlankDialogComponent
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
