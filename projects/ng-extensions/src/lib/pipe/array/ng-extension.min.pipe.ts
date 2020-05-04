import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'min'
})
export class NgExtensionMinPipe implements PipeTransform{
  transform(value: any): any {
    return Math.min(...value);
  }
}
