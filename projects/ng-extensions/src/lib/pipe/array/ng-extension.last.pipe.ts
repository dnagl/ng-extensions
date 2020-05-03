import {Pipe, PipeTransform} from '@angular/core';
import {isArray} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'last'
})
export class NgExtensionLastPipe implements PipeTransform {

  transform(value: any): any {
    if (!isArray(value)){
      return null;
    }
    const arr = value as Array<any>;
    return arr[arr.length - 1];
  }

}
