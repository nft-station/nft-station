import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutAuthencationComponent} from "@app/layouts/layout-authencation/layout-authencation.component";
import {LayoutUnauthencationComponent} from "@app/layouts/layout-unauthencation/layout-unauthencation.component";

const routes: Routes = [
  { path: '', component: LayoutAuthencationComponent, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'sign-up', component: LayoutUnauthencationComponent, loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'transfer', component: LayoutAuthencationComponent, loadChildren: () => import('./pages/transfer/transfer.module').then(m => m.TransferModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
