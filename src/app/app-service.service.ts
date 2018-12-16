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
    public primaryKey;
    public primaryField;
    public primaryValue;
    public show = true;

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
        this.table = table;
        this.results = this.http.get(this.url + '/table/' + table);
        this.columns = this.http.get(this.url + '/tableDesc/' + table);
        this.columns.subscribe(res => {
          for (let i in res) {
            if(res[i].Key == "PRI"){
              this.primaryKey = res[i].Key;
              this.primaryField = res[i].Field;
            }  
          }
        });
	    return this.http.get(this.url + '/table/' + table);
    }

    editTable(result: any) {
      var col = "";
      var res = "";
      var value = "";
    
      for(let i in result){
        if(col.length == 0){
          col = i; 
          res = result[i];
          value = result[i];
        } else {
          col += "+" + i;
          res += "+" + result[i];
        }
      }
      switch(this.modal_state){
        case "insert":
            this.editResults = this.http.get(this.url + "/insert/" + this.table + "/" + col + "/" + res.replace(/\s/g, "%20"));
            this.editResults.subscribe(w=>console.log("Results from insert: " + w));
            setTimeout(() => {}, 2000);
            break;
        case "update":
            this.editResults = this.http.get(this.url + "/update/" + this.table + "/" + col + "/" + res.replace(/\s/g, "%20") + "/" + this.primaryField + "/" + value);
            this.editResults.subscribe(w=>console.log("Results from update: " + w));
            setTimeout(() => {}, 2000);
            break;
        case "delete":
            this.editResults = this.http.get(this.url + "/delete/" + this.table + "/" + this.primaryField + "/" + value);
            this.editResults.subscribe(w=>console.log("Results from delete: " + w));
            setTimeout(() => {}, 2000);        
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