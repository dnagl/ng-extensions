import {Pipe, PipeTransform} from '@angular/core';
import {removeNewLines} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'removeNewLines'
})
export class NgExtensionRemoveNewlinesPipe implements PipeTransform{
  transform(value: any): any {
    return removeNewLines(value);
  }
}
