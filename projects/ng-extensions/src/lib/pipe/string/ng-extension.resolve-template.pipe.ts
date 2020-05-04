import {Pipe, PipeTransform} from '@angular/core';
import {resolveTemplate} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'resolveTemplate'
})
export class NgExtensionResolveTemplatePipe implements PipeTransform{
  transform(value: any, vars: any, templateChar: string = '$'): any {
    return resolveTemplate(value, vars, templateChar);
  }
}
