import {Pipe, PipeTransform} from "@angular/core";
import {isFloat} from "../../utils/ng-extension.utils";

@Pipe({
  name: 'isFloat'
})
export class NgExtensionIsFloatPipe implements PipeTransform {

  transform(value: any): boolean {
    return isFloat(value);
  }

}
