import {Pipe, PipeTransform} from '@angular/core';
import {padLeft} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'padLeft'
})
export class NgExtensionPaddingLeftPipe implements PipeTransform{
  transform(value: any, padLength: number = 0, padCar: string = ' '): string {
    return padLeft(value, padLength, padCar);
  }
}
