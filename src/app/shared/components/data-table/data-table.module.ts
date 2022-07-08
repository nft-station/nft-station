import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/app.module';
import { PaginatorModule } from '../paginator/paginator.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, MaterialModule, MatTableModule, PaginatorModule],
  exports: [DataTableComponent],
})
export class DataTableModule {}
