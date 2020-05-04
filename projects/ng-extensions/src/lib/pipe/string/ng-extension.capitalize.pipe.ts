import {Pipe, PipeTransform} from '@angular/core';
import {capitalize} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'capitalize'
})
export class NgExtensionCapitalizePipe implements PipeTransform{
  transform(value: any): any {
    return capitalize(value);
  }
}
