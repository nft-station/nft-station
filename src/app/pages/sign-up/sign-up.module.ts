import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { CheckingAccountComponent } from './checking-account/checking-account.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@app/shared/shared.module";


@NgModule({
  declarations: [
    SignUpComponent,
    CheckingAccountComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
