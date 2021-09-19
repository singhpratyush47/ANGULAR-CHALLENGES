import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(creditCardDetails:string): string {
    const parts=creditCardDetails.match(/[\s\S]{1,4}/g);
    return parts.join('-');
  }

}
