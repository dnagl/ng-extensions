import {Pipe, PipeTransform} from "@angular/core";
import {isNull} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'prop'
})
export class NgExtensionPropPipe implements PipeTransform {

  transform(value: any): any {
    if (isNull(value)) return [];
    return Object.keys(value);
  }

}
