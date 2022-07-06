import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { CommonService } from './core/services/common.service';
import { LayoutsModule } from './layouts/layouts.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  exports: [
    MatTableModule
  ],
  declarations: [],
})
export class MaterialModule {}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
