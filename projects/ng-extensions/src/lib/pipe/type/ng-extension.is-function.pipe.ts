import {Pipe, PipeTransform} from '@angular/core';
import {isFunction} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'isFunction'
})
export class NgExtensionIsFunctionPipe implements PipeTransform {

  transform(value: any): boolean {
    return isFunction(value);
  }

}
