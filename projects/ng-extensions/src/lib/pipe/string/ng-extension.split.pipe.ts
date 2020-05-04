import {Pipe, PipeTransform} from '@angular/core';
import {split} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'split'
})
export class NgExtensionSplitPipe implements PipeTransform{
  transform(value: any, delimiter: string = ' '): any {
    return split(value, delimiter);
  }
}
