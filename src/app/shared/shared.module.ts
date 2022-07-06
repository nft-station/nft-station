import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { NFTAssetComponent } from './components/nft-asset/nft-asset.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [CardInfoComponent, NFTAssetComponent, LoadingComponent],
  imports: [CommonModule],
    exports: [CardInfoComponent, NFTAssetComponent, LoadingComponent]
})
export class SharedModule {}
