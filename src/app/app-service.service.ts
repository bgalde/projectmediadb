import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({ 
  providedIn: 'root',
})
  export class AppService {
    constructor(private http: HttpClient) {}
    url = 'http://127.0.0.1:8000/api/db';
    private result;

    getAllTables() {
        return this.http.get(this.url);
        /*
        this.http.get(this.url)
        .map((data: any) => data.json())
        .subscribe(
                (data: any) => {
                    this.result = data;
                },
                err => console.log(err), // error
                () => console.log('getUserStatus Complete') // complete
            );
        return this.result;
        */
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    getTable(table: string){
        return this.http.get<any>(this.url + '/' + table);
    }

}