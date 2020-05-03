import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'isDefined'
})
export class NgExtensionIsDefinedPipe implements PipeTransform {

  transform(value: any): boolean {
    return !isUndefined(value);
  }

}
