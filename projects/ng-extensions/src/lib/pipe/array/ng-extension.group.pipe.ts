import {Pipe, PipeTransform} from '@angular/core';
import {group} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'group'
})
export class NgExtensionGroupPipe implements PipeTransform{
  transform(value: any, property: string): any {
    return group(value, property);
  }
}
