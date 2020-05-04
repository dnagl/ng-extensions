import {Pipe, PipeTransform} from '@angular/core';
import {startsWith} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'startsWith'
})
export class NgExtensionStartsWithPipe implements PipeTransform{
  transform(value: any, startValue: any): any {
    return startsWith(value, startValue);
  }
}
