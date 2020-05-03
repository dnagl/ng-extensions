import {Pipe, PipeTransform} from "@angular/core";
import {toUpperCaseFirst} from "../../utils/ng-extension.utils";

@Pipe({
  name: 'toUpperFirst'
})
export class NgExtensionUpperFirstPipe implements PipeTransform {
  transform(value: any, delimiter: string = ''): string {
    return toUpperCaseFirst(value);
  }
}
