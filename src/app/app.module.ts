import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { ToastrModule } from 'ngx-toastr';
import { WalletService } from './core/services/wallet.service';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  exports: [MatTableModule],
  declarations: [],
  imports: [NoopAnimationsModule],
})
export class MaterialModule {}
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
  ],
  providers: [WalletService],
  bootstrap: [AppComponent],
})
export class AppModule {}
