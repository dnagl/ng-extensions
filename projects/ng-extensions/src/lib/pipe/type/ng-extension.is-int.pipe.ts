import {Pipe, PipeTransform} from '@angular/core';
import {isInt} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'isInt'
})
export class NgExtensionIsIntPipe implements PipeTransform {

  transform(value: any): boolean {
    return isInt(value);
  }

}
