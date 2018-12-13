import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { DisplayTablesComponent } from './display-tables/display-tables.component'
import 'rxjs/add/operator/map';

@Injectable({ 
  providedIn: 'root',
})
  export class AppService {
    public results: Observable<any>;
    public columns: Observable<any>;
    public table;
    public modal_state;

    constructor(private http: HttpClient) {
      this.results = new Observable<any>();
      this.columns = new Observable<any>();
    }
    // URL for the node.js REST API
    url = 'http://projectmediadb.ddns.net:8180/api/db';

    // Function that requests the tables from database.
    getAllTables() {
        return this.http.get(this.url + '/' + 'getTables');
    }

    // Function to get contents of specified database table.
    getTable(table: string) {
        console.log('fetching ' + this.url + '/table/' + table + '...');
        this.table = table;
        // this.results = this.http.get(this.url + '/table/' + table);
        // this.columns = this.http.get(this.url + '/tableDesc/' + table);
        this.results = this.http.get(this.url + '/table/' + table);
        this.columns = this.http.get(this.url + '/tableDesc/' + table);


        /*
        this.results.subscribe((w: Observable<any>) => {console.log(JSON.stringify(w));
        };)
        */

        /* Subscribed observable for printing to console
        this.results = this.http.get(this.url + '/table/' + table).subscribe(results => {
           console.log(JSON.stringify(results));
        });
        */

	return this.http.get(this.url + '/table/' + table);

    }

    setModalState(value:string) { 
      this.modal_state = value;
      return this.modal_state;
    }


    getResults() {
      this.results.subscribe(m => console.log(JSON.stringify(m)));
      return this.results;
    }

}