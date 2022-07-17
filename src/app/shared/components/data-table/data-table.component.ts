import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
// import { PageEvent } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
// import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { TableTemplate } from '@app/core/models/common.model';
import { MatSort } from '@angular/material/sort';
import { PAGE_EVENT } from '@app/core/constants/common.constant';
import { CommonService } from '@app/core/services/common.service';

interface CustomPageEvent {
  next: number;
  type: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit {
  @Input() data: any[];
  @Input() length: number;
  @Input() templates: any;

  displayedColumns: string[];
  pageData: PageEvent = {
    length: PAGE_EVENT.LENGTH,
    pageSize: PAGE_EVENT.PAGE_SIZE,
    pageIndex: PAGE_EVENT.PAGE_INDEX,
  };
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  sortedData: any;
  sort: MatSort;
  filterSearchData = [];
  pageSize = 20;

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.displayedColumns = this.templates.map((dta: { matColumnDef: any }) => dta.matColumnDef);
    this.getTransactionHistory();
  }

  getTransactionHistory() {
    this.pageData.length = this.data.length;
    this.sortedData = this.data.sort((a, b) => {
      return this.compare(a.timestamp, b.timestamp, false);
    });

    let dataTemp = this.sortedData;
    this.dataSource = new MatTableDataSource<any>(dataTemp);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  paginatorEmit(e: any): void {
    this.dataSource.paginator = e;
  }

  handlePageEvent(e: any) {
    this.pageData = e;
  }
}
