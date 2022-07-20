import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NFTAssetComponent } from './components/nft-asset/nft-asset.component';

@NgModule({
  declarations: [CardInfoComponent, NFTAssetComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [],
  exports: [CardInfoComponent, NFTAssetComponent, LoadingComponent],
})
export class SharedModule {}
