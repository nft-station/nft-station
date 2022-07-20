import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Keplr } from '@keplr-wallet/types';

import { from, mergeMap, of } from 'rxjs';

import { FORM_STYLE } from '@app/core/constants/common.constant';
import { ContractService } from '@app/core/services/contract.service';
import { GToastrService } from '@app/core/services/toast.service';
import { omitBy_Nil } from '@app/core/utils/lodash';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  formStyle = FORM_STYLE;
  accountName = '';
  regForm!: FormGroup;

  loading = true;

  isUpdate = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contractService: ContractService,
    private t: GToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.accountName = this.route.snapshot.params['accountName'];
    if (!this.accountName) {
      this.router.navigate(['']);
    }

    this.initRegForm();

    this.loadData();
  }

  get formControls() {
    return this.regForm.controls;
  }

  initRegForm() {
    this.regForm = this.fb.group({
      image: [{ value: null }],
      image_data: [{ value: null }],
      external_url: [{ value: null }],
      description: [{ value: null }],
      twitter_id: [{ value: null }],
      discord_id: [{ value: null }],
      telegram_id: [{ value: null }],
      facebook_id: [{ value: null }],
    });

    this.regForm.disable();
  }

  loadData() {
    this.contractService
      .queryContractSmart({
        address_of: {
          token_id: this.accountName,
        },
      })
      .pipe(
        mergeMap(address => {
          if ((address as any).owner === 'aura1xahhax60fakwfng0sdd6wcxd0eeu00r5w3s49h') {
            return this.contractService.queryContractSmart({
              nft_info: {
                token_id: this.accountName,
              },
            });
          }

          return of(null);
        })
      )

      .subscribe({
        next: res => {
          if (!res) {
            this.router.navigate(['']);

            return;
          }
          const { image, image_data, external_url, description, twitter_id, discord_id, telegram_id, facebook_id } = (
            res as any
          )?.extension;

          this.regForm.patchValue({
            image,
            image_data,
            external_url,
            description,
            twitter_id,
            discord_id,
            telegram_id,
            facebook_id,
          });

          this.loading = false;
        },
        error: e => {
          this.loading = false;

          this.router.navigate(['']);
        },
      });
  }

  enableForm() {
    this.regForm.enable();

    this.isUpdate = !this.isUpdate;
  }

  disableForm() {
    this.regForm.disable();

    this.isUpdate = !this.isUpdate;
  }

  onSubmit() {
    if (!this.isUpdate) {
      this.isUpdate = !this.isUpdate;

      this.regForm.enable();
    } else {
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
              const mintMsg = this.makeUpdateMsg();
              return this.contractService.execute(address, mintMsg);
            })
          )
          .subscribe({
            next: res => {
              this.loading = false;

              this.t.success('Update Success');

              this.disableForm();
            },
            error: err => {
              this.loading = false;

              this.t.error(err?.message || '', 'Update Fail');
              console.log('err', err);

              this.disableForm();
            },
          });
      }
    }
  }

  makeUpdateMsg() {
    const { image, image_data, external_url, description, twitter_id, discord_id, telegram_id, facebook_id } =
      this.regForm.value;

    return omitBy_Nil({
      update_meta_data: {
        token_id: this.accountName,
        metadata: omitBy_Nil({
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
