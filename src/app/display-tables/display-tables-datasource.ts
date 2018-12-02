import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { AppComponent } from '../app.component';
import { AppService } from '../app-service.service';

// TODO: Replace this with your own data model type
export interface DisplayTablesItem {
  id: number,
  name: string,
  year: number,
  type: string

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DisplayTablesItem[] = [
    {id: 1, name: "Angular 7", year: 2018, type: "Programming"},
    {id: 2, name: "Java", year: 2017, type: "Programming"}
];

/**
 * Data source for the DisplayTables view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DisplayTablesDataSource extends DataSource<DisplayTablesItem> {
  data: DisplayTablesItem[] = EXAMPLE_DATA;
  private tableData;

  constructor(private paginator: MatPaginator, private sort: MatSort, private appService: AppService) {
    super();
  }

  ngOnInit(){
   this.data = EXAMPLE_DATA;
   /*this.appService.getTable()
      .subscribe(response => {
        this.tableData = response;
        console.log(this.tableData);
        //this.DataSource.data = this.tableData;
        
      });*/
  }
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DisplayTablesItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
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
  private getPagedData(data: DisplayTablesItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DisplayTablesItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
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
