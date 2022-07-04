import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@app/app.module';
import { DataTableComponent } from './data-table.component';
import { MatTableModule } from '@angular/material/table';
import { PaginatorModule } from '../paginator/paginator.module';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, MaterialModule, MatTableModule, PaginatorModule],
  exports: [DataTableComponent],
})
export class DataTableModule {}
