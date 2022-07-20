import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthenticationComponent } from '@app/layouts/layout-authentication/layout-authentication.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthenticationComponent,
    // loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),

    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule),
  },
  // {
  //   path: 'sign-up',
  //   component: LayoutAuthenticationComponent,
  //   loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule),
  // },
  {
    path: 'transfer',
    component: LayoutAuthenticationComponent,
    loadChildren: () => import('./pages/transfer/transfer.module').then(m => m.TransferModule),
  },
  {
    path: 'name-service',
    component: LayoutAuthenticationComponent,
    loadChildren: () => import('./pages/name-service/name-service.module').then(m => m.NameServiceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
