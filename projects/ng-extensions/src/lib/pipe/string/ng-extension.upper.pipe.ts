import {Pipe, PipeTransform} from '@angular/core';
import {toUpperCase} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'toUpper'
})
export class NgExtensionUpperPipe implements PipeTransform {
  transform(value: any, delimiter: string = ''): string {
    return toUpperCase(value);
  }
}
