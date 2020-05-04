import {Pipe, PipeTransform} from '@angular/core';
import {trimHtmlTags} from '../../utils/ng-extension.utils';

@Pipe({
  name: 'trimHtml'
})
export class NgExtensionTrimHtmlPipe implements PipeTransform{
  transform(value: any): any {
    return trimHtmlTags(value);
  }
}
