import {Pipe, PipeTransform} from '@angular/core';
import {trim} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'trim'
})
export class NgExtensionTrimPipe implements PipeTransform{
  transform(value: any): any {
    return trim(value);
  }
}
