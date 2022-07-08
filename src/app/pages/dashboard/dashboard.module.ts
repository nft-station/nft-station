import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DataTableModule } from '@app/shared/components/data-table/data-table.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule, DashboardRoutingModule, DataTableModule, MatTableModule, SharedModule],
  providers: [],
  exports: [],
})
export class DashboardModule {}
