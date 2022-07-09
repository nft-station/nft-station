import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PaginatorModule } from '../paginator/paginator.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, MatTableModule, PaginatorModule],
  exports: [DataTableComponent],
})
export class DataTableModule {}
