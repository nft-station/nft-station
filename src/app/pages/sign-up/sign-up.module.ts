import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { CheckingAccountComponent } from './checking-account/checking-account.component';
import { RegisterComponent } from './register/register.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [SignUpComponent, CheckingAccountComponent, RegisterComponent],
  imports: [CommonModule, SignUpRoutingModule, FormsModule, SharedModule, ReactiveFormsModule],
})
export class SignUpModule {}
