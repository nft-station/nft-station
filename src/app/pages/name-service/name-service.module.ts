import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { EditComponent } from './edit/edit.component';
import { NameServiceRoutingModule } from './name-service-routing.module';
import { NameServiceComponent } from './name-service.component';

@NgModule({
  declarations: [EditComponent, NameServiceComponent],
  imports: [CommonModule, NameServiceRoutingModule, FormsModule, SharedModule, ReactiveFormsModule],
})
export class NameServiceModule {}
