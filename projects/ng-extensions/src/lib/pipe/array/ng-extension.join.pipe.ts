import {Pipe, PipeTransform} from "@angular/core";
import {isArray} from "../../utils/ng-extension.utils";

@Pipe({
  name: 'join'
})
export class NgExtensionJoinPipe implements PipeTransform {
  transform(value: any, delimiter: string = ''): string {
    if (!isArray(value)) return null;
    let arr = value as Array<any>;
    return arr.join(delimiter);
  }
}
