import {Pipe, PipeTransform} from '@angular/core';
import {isEmpty, isNull, isUndefined} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'toArray'
})
export class NgExtensionToArrayPipe implements PipeTransform{
  transform(value: any): Array<any> {
    if (isNull(value) || isUndefined(value) || isEmpty(value)){
      return [];
    }
    return Object.values(value);
  }
}
