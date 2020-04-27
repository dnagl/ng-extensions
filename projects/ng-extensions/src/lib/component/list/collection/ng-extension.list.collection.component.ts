import {Component} from "@angular/core";
import {NgExtensionListProvider} from "../ng-extension.list.provider";

@Component({
  selector: 'ng-list-collection',
  templateUrl: './ng-extension.list.collection.component.html',
  styleUrls: [
    '../../ng-extension.styles.scss',
    './ng-extension.list.collection.component.scss'
  ]
})
export class NgListCollectionComponent{

  constructor(public listProvider:NgExtensionListProvider) {
  }

}
