import {Pipe, PipeTransform} from "@angular/core";
import {toLowerCaseFirst} from "../../utils/ng-extension.utils";

@Pipe({
  name: 'toLowerFirst'
})
export class NgExtensionLowerFirstPipe implements PipeTransform {
  transform(value: any, delimiter: string = ''): string {
    return toLowerCaseFirst(value);
  }
}
