import {Pipe, PipeTransform} from '@angular/core';
import {reverse} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'reverse'
})
export class NgExtensionReversePipe implements PipeTransform{
  transform(value: any): any {
    return reverse(value);
  }
}
