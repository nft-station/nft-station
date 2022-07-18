import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FORM_STYLE } from '@app/core/constants/common.constant';
import { ContractService } from '@app/core/services/contract.service';

import { Keplr } from '@keplr-wallet/types';
import * as _ from 'lodash';
import { from, mergeMap } from 'rxjs';

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
    if (!this.accountName) {
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
      image: new FormControl(),
      image_data: new FormControl(),
      external_url: new FormControl(),
      description: new FormControl(),
      twitter_id: new FormControl(),
      discord_id: new FormControl(),
      telegram_id: new FormControl(),
      facebook_id: new FormControl(),
    });
  }

  onSubmit() {
    if ((window as any).keplr) {
      const keplr: Keplr = (window as any).keplr;
      const CHAIN_ID = 'serenity-testnet-001';

      from(
        keplr
          .enable(CHAIN_ID)
          .then(_ => keplr.getKey(CHAIN_ID))
          .then(account => account?.bech32Address)
      )
        .pipe(
          mergeMap(address => {
            const mintMsg = this.makeMintMessage(address);
            return this.contractService.execute(address, mintMsg);
          })
        )
        .subscribe({
          next: res => {
            console.log('mint res', res);
          },
          error: err => {
            console.log('err', err);
          },
        });
    }
  }

  makeMintMessage(address: string) {
    const { name, image, image_data, external_url, description, twitter_id, discord_id, telegram_id, facebook_id } =
      this.regForm.value;

    return getObject({
      mint: {
        token_id: name || this.formControls['name'].value,
        owner: address,
        token_uri: '',
        extension: getObject({
          image,
          image_data,
          external_url,
          description,
          twitter_id,
          discord_id,
          telegram_id,
          facebook_id,
        }),
      },
    });
  }
}
function getObject(obj: any) {
  return _.omitBy(obj, _.isNil);
}
