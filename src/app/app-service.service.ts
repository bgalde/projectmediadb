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
    public editResults;

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
        this.columns.subscribe((result: any) => console.log(result.Key));
	    return this.http.get(this.url + '/table/' + table);
    }

    editTable(result: any) {
      var col = "";
      var res = "";
      var key = "";

      console.log("col.length: " + col.length);
    
      for(let i in result){
        if(col.length == 0){
          col = i; 
          res = result[i];
          key = this.columns[i]
        } else {
          col += "+" + i;
          res += "+" + result[i];
        }
        //console.log("columns: " + col);
        console.log("key: " + key);
        //console.log("results: " + res);
      }
      switch(this.modal_state){
        case "insert":
            console.log("<<<< " + this.url + "/insert/" + this.table + "/" + col + "/" + res.replace(/\s/g, "%20"));
            this.editResults = this.http.get(this.url + "/insert/" + this.table + "/" + col + "/" + res.replace(/\s/g, "%20"));
            this.editResults.subscribe(w=>console.log("Results from insert: " + w));
            break;
        case "delete":
            console.log(">>>> " + this.url + "/" + this.table + "/delete/");
            break;
        default:
            break;
      }
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