import {Pipe, PipeTransform} from '@angular/core';
import {repeat} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'repeat'
})
export class NgExtensionRepeatPipe implements PipeTransform{
  transform(value: any, repeatCnt: number = 1): string {
    return repeat(value, repeatCnt);
  }
}
