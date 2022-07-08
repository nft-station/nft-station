import { Component } from '@angular/core';
import { BTN_COLOR_GRADIENT } from '@app/core/constants/common.constant';

@Component({
  selector: 'app-transfer-token',
  templateUrl: './transfer-token.component.html',
  styleUrls: ['./transfer-token.component.scss'],
})
export class TransferTokenComponent {
  btnColor = BTN_COLOR_GRADIENT;
}
