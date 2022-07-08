import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterAuthenticationComponent } from './layout-authentication/footer-authentication/footer-authentication.component';
import { HeaderAuthenticationComponent } from './layout-authentication/header-authentication/header-authentication.component';
import { LayoutAuthenticationComponent } from './layout-authentication/layout-authentication.component';
import { FooterUnauthencationComponent } from './layout-unauthencation/footer-unauthencation/footer-unauthencation.component';
import { HeaderUnauthencationComponent } from './layout-unauthencation/header-unauthencation/header-unauthencation.component';
import { LayoutUnauthencationComponent } from './layout-unauthencation/layout-unauthencation.component';

@NgModule({
  declarations: [
    LayoutAuthenticationComponent,
    HeaderAuthenticationComponent,
    FooterAuthenticationComponent,
    LayoutUnauthencationComponent,
    HeaderUnauthencationComponent,
    FooterUnauthencationComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [],
})
export class LayoutsModule {}
