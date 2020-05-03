import {Pipe, PipeTransform} from "@angular/core";
import {isNumber} from "../../utils/ng-extension.utils";

@Pipe({
  name: 'isNumber'
})
export class NgExtensionIsNumberPipe implements PipeTransform {

  transform(value: any): boolean {
    return isNumber(value);
  }

}
