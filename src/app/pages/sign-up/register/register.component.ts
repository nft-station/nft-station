import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FORM_STYLE } from '@app/core/constants/common.constant';
import { ContractService } from '@app/core/services/contract.service';

import { Keplr, Key } from '@keplr-wallet/types';
import { omitBy_Nil } from '@app/core/utils/lodash';
import { delay, from, mergeMap, of, tap } from 'rxjs';
import { GToastrService } from '@app/core/services/toast.service';
import { WalletService } from '@app/core/services/wallet.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formStyle = FORM_STYLE;
  accountName = '';
  regForm!: FormGroup;

  loading = false;

  accountKey: Key | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contractService: ContractService,
    private t: GToastrService,
    private w: WalletService
  ) {}

  ngOnInit(): void {
    this.accountName = this.route.snapshot.params['accountName'];

    this.w.account$.subscribe({
      next: key => (this.accountKey = key),
    });

    if (!this.accountName) {
      this.router.navigate(['/']);
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
    if (this.accountKey) {
      this.mint();
    } else {
      // this.w.connectKeplr().then(_ => {
      //   this.mint;
      // });
      this.t.error('Please connect Your Wallet!');
    }
  }

  mint() {
    if ((window as any).keplr) {
      const keplr: Keplr = (window as any).keplr;
      const CHAIN_ID = 'serenity-testnet-001';
      this.loading = true;
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
            this.loading = false;
            this.t.success('Register Success');

            of(1)
              .pipe(delay(1000))
              .subscribe(t => this.router.navigate(['transfer']));
          },
          error: err => {
            this.loading = false;
            this.t.error(err?.message || '', 'Register Fail');
            console.log('err', err);
          },
        });
    }
  }

  makeMintMessage(address: string) {
    const { name, image, image_data, external_url, description, twitter_id, discord_id, telegram_id, facebook_id } =
      this.regForm.value;

    return omitBy_Nil({
      mint: {
        token_id: name || this.formControls['name'].value,
        owner: address,
        token_uri: '',
        extension: omitBy_Nil({
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
