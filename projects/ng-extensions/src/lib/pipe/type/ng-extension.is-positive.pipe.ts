import {Pipe, PipeTransform} from '@angular/core';
import {isPositive} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'isPositive'
})
export class NgExtensionIsPositivePipe implements PipeTransform {

  transform(value: any): boolean {
    return isPositive(value);
  }

}
