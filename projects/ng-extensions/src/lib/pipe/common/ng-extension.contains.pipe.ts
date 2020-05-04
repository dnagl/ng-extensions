import {Pipe, PipeTransform} from '@angular/core';
import {contains} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'contains'
})
export class NgExtensionContainsPipe implements PipeTransform{
  transform(value: any, searchValue: any): any {
    return contains(value, searchValue);
  }
}
