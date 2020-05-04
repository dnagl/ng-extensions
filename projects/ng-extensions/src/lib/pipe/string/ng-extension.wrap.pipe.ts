import {Pipe, PipeTransform} from '@angular/core';
import {wrap} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'wrap'
})
export class NgExtensionWrapPipe implements PipeTransform{
  transform(value: any, wrapper: string): any {
    return wrap(value, wrapper);
  }
}
