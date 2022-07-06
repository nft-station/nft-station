import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckingAccountComponent} from "@app/pages/sign-up/checking-account/checking-account.component";
import {RegisterComponent} from "@app/pages/sign-up/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: CheckingAccountComponent
  },
  {
    path: 'mint/:accountName',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
