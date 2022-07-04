import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransferComponent } from './transfer.component';
import { TransferRoutingModule } from './transfer-routing.module';
import { FormsModule } from '@angular/forms';
import { TransferNFTComponent } from './transfer-nft/transfer-nft.component';
import { TransferTokenComponent } from './transfer-token/transfer-token.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    TransferComponent,
    TransferNFTComponent,
    TransferTokenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TransferRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  exports: []
})
export class TransferModule { }
