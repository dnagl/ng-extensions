import {Pipe, PipeTransform} from '@angular/core';
import {pad} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'pad'
})
export class NgExtensionPaddingPipe implements PipeTransform{
  transform(value: any, padLengthLeft: number = 0, padLengthRight: number = 0,
            padCharLeft: string = ' ', padCharRight: string = ' '): string {
    return pad(value, padLengthLeft, padCharLeft, padLengthRight, padCharRight);
  }
}
