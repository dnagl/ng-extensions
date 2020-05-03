import {Pipe, PipeTransform} from '@angular/core';
import {isNegative} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'isNegative'
})
export class NgExtensionIsNegativePipe implements PipeTransform {

  transform(value: any): boolean {
    return isNegative(value);
  }

}
