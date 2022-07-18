import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GToastrService {
  private POSITION_CLASS = 'toast-bottom-right';

  TIMEOUT_DEFAULT = 3000;

  constructor(private toastrService: ToastrService) {}

  success(message: string, title = '', configTimeOut = 3000): void {
    this.toastrService.success(message, title, {
      positionClass: this.POSITION_CLASS,
      timeOut: configTimeOut,
    });
  }

  successWithTap(message: string, title = ''): Observable<void> {
    return this.toastrService.success(message, title, {
      positionClass: this.POSITION_CLASS,
      timeOut: 20000,
    }).onTap;
  }

  error(message: string, title = '', configTimeOut = 3000): void {
    this.toastrService.error(message, title, {
      positionClass: this.POSITION_CLASS,
      timeOut: 20000,
    });
  }

  errorWithTap(message: string, title = ''): Observable<void> {
    return this.toastrService.error(message, title, {
      positionClass: this.POSITION_CLASS,
      timeOut: this.TIMEOUT_DEFAULT,
    }).onTap;
  }
}
