import {Component, OnInit} from "@angular/core";
import {NgExtensionListProvider} from "../../../../../ng-extensions/src/lib/component/list/ng-extension.list.provider";
import {
  NgListCollection,
  NgListElement, NgListElementAction
} from "../../../../../ng-extensions/src/lib/component/list/ng-extension.list.model";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.scss'
  ]
})
export class ListComponent{

  public selectedId: number;

  constructor(public listProvider: NgExtensionListProvider) {
    for(let x = 0; x < 3; x++){
      let listCollection = new NgListCollection();
      listCollection.title = "My List";
      this.listProvider.addListCollection(listCollection);
      this.selectedId = listCollection.id;

      for(let i = 0; i < 18; i++){
        let element = new NgListElement();
        //element.title = "Hello World";
        element.content = "Hello Element!";

        let editActionElement = new NgListElementAction();
        let deleteActionElement = new NgListElementAction();
        editActionElement.content = 'edit';
        deleteActionElement.content = 'edit';
        element.addActionItem(editActionElement);
        element.addActionItem(deleteActionElement);

        listCollection.addListElement(element);
      }
    }
  }


}
