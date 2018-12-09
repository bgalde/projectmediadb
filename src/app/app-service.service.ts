import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({ 
  providedIn: 'root',
})
  export class AppService {
    public results: Observable<any>;
    private mySubject:  Subject<any>;

    constructor(private http: HttpClient) {
      this.results = new Observable<any>;
    }
    // URL for the node.js REST API
    url = 'http://192.168.1.115:8181/api/db';
    public table;

    // Function that requests the tables from database.
    getAllTables() {
        return this.http.get(this.url + '/' + 'getTables');
    }

    // Function to get contents of specified database table.
    getTable(table: string) {
        console.log('fetching ' + this.url + '/table/' + table + '...');
        this.results = this.http.get(this.url + '/table/' + table);
        console.log("this.results should return here.");
        /* Subscribed observable for printing to console
        this.results = this.http.get(this.url + '/table/' + table).subscribe(results => {
           console.log(JSON.stringify(results));
        });
        */
	    return this.http.get(this.url + '/table/' + table);

    }

    getResults() {
      this.results.subscribe(m => console.log(JSON.stringify(m)));
      return this.results;
    }

}
