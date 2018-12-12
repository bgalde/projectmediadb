import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { AppComponent } from '../app.component';
import { AppService } from '../app-service.service';

// TODO: Replace this with your own data model type
export interface DisplayTablesItem {
  id: number,
  name: string,
  format: string,
  publisher: string,
  title: string,
  year: number,
  type: string
}

/**
 * Data source for the DisplayTables view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DisplayTablesDataSource {
  public data;
  public displayedColumns;
  public dataSource;
  public results;
  public columns;

  constructor(private paginator: MatPaginator, private sort: MatSort, private appService: AppService) {
  }

  ngOnInit() {

    this.data = [] //TABLE DATASOURCE
    
    //GET SOMETHING FROM SERVICE 
    this.results = this.appService.results;
    /*
    this.appService.results.subscribe((newResults: Observable<any>) => {
      this.results = newResults;
    });
    this.appService.columns.subscribe((newColumns: Observable<any>) => {
      this.columns = newColumns;
    });
    */
    //FILL TABLE DATASOURCE 
    var obj = {};
    for (let v in this.columns) {
      console.log(v);
    }
    for (let i in this.results ){
      console.log(i);
      /*
      obj[i.name] = i.value;
        this.data.push(obj);
        obj={};
      */
    }
    
    //CREATE DISPLAYED COLUMNS DYNAMICALLY
    this.displayedColumns = [];
    for( let v in this.columns[0]){
        this.displayedColumns.push(v);
    }
    
    //INITIALIZE MatTableDataSource
    this.dataSource = new MatTableDataSource(this.data);
    }
    





























  public tableData;

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<any> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.appService.results),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      this.appService.results.subscribe((newResults: Observable<any>[]) => {
        return this.getPagedData(this.getSortedData([...newResults]));
      });
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: any) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: any) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'title': return compare(a.title, b.title, isAsc);
        case 'format': return compare(a.format, b.format, isAsc);
        case 'publisher': return compare(a.publisher, b.publisher, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        case 'year': return compare(+a.year, +b.year, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
