import {Pipe, PipeTransform} from '@angular/core';
import {isEmpty} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'isEmpty'
})
export class NgExtensionEmptyPipe implements PipeTransform {

  transform(value: any): boolean {
    return isEmpty(value);
  }

}
