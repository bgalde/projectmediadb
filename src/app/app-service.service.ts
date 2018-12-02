import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({ 
  providedIn: 'root',
})
  export class AppService {
    constructor(private http: HttpClient) {}
    // URL for the node.js REST API
    url = 'http://projectmediadb.ddns.net:8180/api/db';
    private result;

    // Function that requests the tables from database.
    getAllTables() {
        return this.http.get(this.url + '/' + 'getTables');
    }

    // Function to get contents of specified database table.
    getTable(table: string) {
        console.log('fetching ' + this.url + '/table/' + table + '...');
        this.http.get(this.url + '/table/' + table).subscribe(results => {
           console.log(JSON.stringify(results));
        });
	    return this.http.get(this.url + '/table/' + table);

    }

}
