import {Pipe, PipeTransform} from "@angular/core";
import {flat, isArray} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'flat'
})
export class NgExtensionFlatPipe implements PipeTransform {

  transform(value: any): any {
    if (!isArray(value)) return null;
    return flat(value);
  }

}
