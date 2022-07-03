import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';

@Component({
  selector: 'app-transfer-token',
  templateUrl: './transfer-token.component.html',
  styleUrls: ['./transfer-token.component.scss'],
})
export class TransferTokenComponent implements OnInit {
  btnColor = BTN_COLOR_GRADIENT;
  constructor() {}

  ngOnInit(): void {
  }
}
