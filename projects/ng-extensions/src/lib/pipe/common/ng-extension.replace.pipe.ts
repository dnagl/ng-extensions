import {Pipe, PipeTransform} from '@angular/core';
import {replace} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'replace'
})
export class NgExtensionReplacePipe implements PipeTransform{
  transform(value: any, searchElement: any = '', replacement: any = ''): any {
    return replace(value, searchElement, replacement);
  }
}
