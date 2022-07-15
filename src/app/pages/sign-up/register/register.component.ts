import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {FORM_STYLE} from "@app/core/constants/common.constant";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formStyle = FORM_STYLE;
  accountName = '';
  regForm!: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.accountName = this.route.snapshot.params['accountName'];
    if(!this.accountName || (this.accountName && this.accountName.trim().length < 5)) {
      this.router.navigate(['/sign-up']);
    }
    this.initRegForm();
  }

  get formControls() {
    return this.regForm.controls;
  }

  initRegForm() {
    this.regForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required, Validators.maxLength(20)]}),
      bio: new FormControl('',{ validators: [Validators.required, Validators.maxLength(20)]}),
      imgUrl: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      website: new FormControl(''),
      twitter: new FormControl(''),
      discord: new FormControl(''),
      telegram: new FormControl(''),
      keyBase: new FormControl('',{ validators: [Validators.required, Validators.maxLength(20)]}),
      ValidatorOperatorAddress: new FormControl('',{ validators: [Validators.required, Validators.maxLength(20)]}),
    })
    this.regForm.controls['name'].setValue(this.accountName);
    this.regForm.controls['name'].disabled;
  }
  onSubmit() {
    console.log(this.regForm.value)
  }
}
