import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DataTableModule } from '@app/shared/components/data-table/data-table.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    DataTableModule,
    MatTableModule,
    SharedModule
  ],
  providers: [],
  exports: []
})
export class DashboardModule { }
