import {Pipe, PipeTransform} from "@angular/core";
import {isNull} from "../../utils/ng-extension.utils";

@Pipe({
  name: 'isNull'
})
export class NgExtensionIsNullPipe implements PipeTransform {

  transform(value: any): boolean {
    return isNull(value);
  }

}
