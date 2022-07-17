import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FORM_STYLE } from '@app/core/constants/common.constant';
import { ContractService } from '@app/core/services/contract.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formStyle = FORM_STYLE;
  accountName = '';
  regForm!: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private contractService: ContractService) {}

  ngOnInit(): void {
    this.accountName = this.route.snapshot.params['accountName'];
    if (!this.accountName || (this.accountName && this.accountName.trim().length < 5)) {
      this.router.navigate(['/sign-up']);
    }
    this.initRegForm();
  }

  get formControls() {
    return this.regForm.controls;
  }

  initRegForm() {
    this.regForm = new FormGroup({
      name: new FormControl(
        { value: this.accountName, disabled: true },
        { validators: [Validators.required, Validators.maxLength(20)] }
      ),
      bio: new FormControl(''),
      imgUrl: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      website: new FormControl(''),
      twitter: new FormControl(''),
      discord: new FormControl(''),
      telegram: new FormControl(''),
      keyBase: new FormControl(''),
      ValidatorOperatorAddress: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.regForm.value);
  }
}
