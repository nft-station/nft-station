import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutAuthencationComponent } from './layout-authencation/layout-authencation.component';
import { HeaderAuthencationComponent } from './layout-authencation/header-authencation/header-authencation.component';
import { FooterAuthencationComponent } from './layout-authencation/footer-authencation/footer-authencation.component';
import { LayoutUnauthencationComponent } from './layout-unauthencation/layout-unauthencation.component';
import { HeaderUnauthencationComponent } from './layout-unauthencation/header-unauthencation/header-unauthencation.component';
import { FooterUnauthencationComponent } from './layout-unauthencation/footer-unauthencation/footer-unauthencation.component';

@NgModule({
  declarations: [
    LayoutAuthencationComponent,
    HeaderAuthencationComponent,
    FooterAuthencationComponent,
    LayoutUnauthencationComponent,
    HeaderUnauthencationComponent,
    FooterUnauthencationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  providers: [],
  exports: []
})
export class LayoutsModule { }
