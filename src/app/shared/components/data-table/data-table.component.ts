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
import { MatTableDataSource } from '@angular/material/table'
import { PageEvent } from '@angular/material/paginator';

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
  // @ViewChild(PaginatorComponent) pageChange: PaginatorComponent;
  @Output() loadMore = new EventEmitter<CustomPageEvent>();

  cardData = [
    {
      title: 'Bored Ape Yacht Club',
      image: 'assets/nft1.png',
      price: 818,
    },
    {
      title: 'CryptoPunks',
      image: 'assets/nft2.png',
      price: 1300,
    },
    {
      title: 'The Sandbox',
      image: 'assets/nft8.jpg',
      price: 1500,
    },
    {
      title: 'goblinTown',
      image: 'assets/nft3.png',
      price: 3500,
    },
    {
      title: 'The Possessed',
      image: 'assets/nft4.png',
      price: 3500,
    },
    {
      title: 'Doodles',
      image: 'assets/nft5.png',
      price: 3500,
    },
    {
      title: 'Azuki',
      image: 'assets/nft6.png',
      price: 3500,
    },
  ];

  dataTable: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  // displayedColumns: string[];

  // dataSource = new MatTableDataSource(this.cardData);
  pageSize = 5;
  pageIndex = 0;
  pageData: PageEvent;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSourceTable = this.dataTable;

  constructor(
  ) {}

  ngOnInit(): void {
    this.displayedColumns = this.templates;
    
    // this.dataSource = new MatTableDataSource(this.cardData);
    // console.log(this.dataSource);
    
  }

  // pageEvent(e: PageEvent): void {
  //   const { length, pageIndex, pageSize } = e;
  //   const next = length <= pageIndex * pageSize;

  //   if (next) {
  //     this.loadMore.emit({
  //       next: 1,
  //       type: this.type,
  //     });
  //   }
  // }

  // paginatorEmit(e): void {
  //   if (this.dataSource) {
  //     this.dataSource.paginator = e;
  //   } else {
  //     this.dataSource = new MatTableDataSource(this.data);
  //     this.dataSource.paginator = e;
  //   }
  // }

  // getListData(): any[] {
  //   if (!(this.dataSource?.paginator && this.dataSource?.data)) {
  //     return [];
  //   }
  //   return this.dataSource.data.slice(
  //     this.dataSource.paginator.pageIndex * this.dataSource.paginator.pageSize,
  //     this.dataSource.paginator.pageIndex * this.dataSource.paginator.pageSize + this.dataSource.paginator.pageSize
  //   );
  // }
}
