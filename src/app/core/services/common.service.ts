import { Injectable } from '@angular/core';
import { formatDistanceToNowStrict } from 'date-fns';
import * as moment from 'moment';
import { DATEFORMAT } from '../constants/common.constant';
import { formatTimeInWords, formatWithSchema } from '../helpers/date';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiUrl = '';
  constructor() {}

  getDateValue(time: any, isCustom = true) {
    if (time) {
      try {
        //get custom function format date if isCustom
        if (isCustom) {
          return [
            formatTimeInWords(new Date(time).getTime()),
            `(${formatWithSchema(new Date(time).getTime(), DATEFORMAT.DATE_TIME_UTC)})`,
          ];
        } else {
          if (+moment(time).format('x') - +moment().format('x') > 0) {
            return [
              formatWithSchema(new Date(time).getTime(), DATEFORMAT.DATE_TIME_UTC),
              formatDistanceToNowStrict(new Date(time).getTime()) + ' remaining',
            ];
          } else {
            return [
              formatTimeInWords(new Date(time).getTime()),
              `${formatWithSchema(new Date(time).getTime(), DATEFORMAT.DATE_TIME_UTC)}`,
            ];
          }
        }
      } catch (e) {
        return [time, ''];
      }
    } else {
      return ['-', ''];
    }
  }
}
