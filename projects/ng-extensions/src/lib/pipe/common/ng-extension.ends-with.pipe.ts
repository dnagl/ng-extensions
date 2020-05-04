import {Pipe, PipeTransform} from '@angular/core';
import {endsWith} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'endsWith'
})
export class NgExtensionEndsWithPipe implements PipeTransform{
  transform(value: any, startValue: any): any {
    return endsWith(value, startValue);
  }
}
