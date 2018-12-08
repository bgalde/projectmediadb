import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root',
})
  export class AppService {
    constructor(private http: HttpClient) {}
    url = 'http://projectmediadb.ddns.net:8180/api/db';

    getAllTables() {
        return this.http.get(this.url + '/' + 'getTables');
    }

    getTable(table: string){
        console.log('fetching ' + this.url + '/table/' + table + '...');
        this.http.get(this.url + '/table/' + table).subscribe(results => {
            console.log(JSON.stringify(results));
        });
        
        return this.http.get<any>(this.url + '/' + table);

    }

}