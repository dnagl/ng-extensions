import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'max'
})
export class NgExtensionMaxPipe implements PipeTransform{
  transform(value: any): any {
    return Math.max(...value);
  }
}
