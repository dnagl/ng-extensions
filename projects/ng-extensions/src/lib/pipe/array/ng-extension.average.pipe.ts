import {Pipe, PipeTransform} from '@angular/core';
import {average} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'average'
})
export class NgExtensionAveragePipe implements PipeTransform{
  transform(value: any): any {
    return average(value);
  }
}
