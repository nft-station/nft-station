import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { NFTAssetComponent } from './components/nft-asset/nft-asset.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { WalletService } from '@app/core/services/wallet.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardInfoComponent, NFTAssetComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [WalletService],
  exports: [CardInfoComponent, NFTAssetComponent, LoadingComponent],
})
export class SharedModule {}
