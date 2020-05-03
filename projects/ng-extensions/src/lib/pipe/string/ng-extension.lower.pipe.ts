import {Pipe, PipeTransform} from "@angular/core";
import {toLowerCase} from "../../utils/ng-extension.utils";

@Pipe({
  name: 'toLower'
})
export class NgExtensionLowerPipe implements PipeTransform {
  transform(value: any, delimiter: string = ''): string {
    return toLowerCase(value);
  }
}
