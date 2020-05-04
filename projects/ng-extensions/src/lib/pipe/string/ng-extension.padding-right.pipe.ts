import {Pipe, PipeTransform} from '@angular/core';
import {padRight} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'padRight'
})
export class NgExtensionPaddingRightPipe implements PipeTransform{
  transform(value: any, padLength: number = 0, padCar: string = ' '): string {
    return padRight(value, padLength, padCar);
  }
}
