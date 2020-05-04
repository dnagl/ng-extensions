import {Pipe, PipeTransform} from '@angular/core';
import {sum} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'sum'
})
export class NgExtensionSumPipe implements PipeTransform{
  transform(value: any): any {
    return sum(value);
  }
}
