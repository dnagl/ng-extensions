import {Component} from '@angular/core';
import {NgExtensionListProvider} from '../ng-extension.list.provider';

@Component({
  selector: 'ng-list-gallery',
  templateUrl: './ng-extension.list.gallery.component.html',
  styleUrls: [
    '../../ng-extension.styles.scss',
    './ng-extension.list.gallery.component.scss'
  ]
})
export class NgListGalleryComponent {

  constructor(public listProvider: NgExtensionListProvider) {
  }

}
