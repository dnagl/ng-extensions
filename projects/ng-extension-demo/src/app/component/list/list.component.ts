import {Component, OnInit} from '@angular/core';
import {NgExtensionListProvider} from '../../../../../ng-extensions/src/lib/component/list/ng-extension.list.provider';
import {
  NgListCollection, NgListCollectionSearch,
  NgListElement, NgListElementAction
} from '../../../../../ng-extensions/src/lib/component/list/ng-extension.list.model';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.scss'
  ]
})
export class ListComponent{

  constructor(public listProvider: NgExtensionListProvider) {
    for (let x = 0; x < 3; x++){
      const listCollection = new NgListCollection();
      listCollection.title = 'My List' + x;
      listCollection.show = true;
      listCollection.collectionSearch = new NgListCollectionSearch('Search for ...', false, 'waves');
      listCollection.showExpander = true;
      listCollection.expand = true;
      listCollection.heightTitle = '80px';
      listCollection.colorTitle = 'red';
      this.listProvider.addListCollection(listCollection);

      for (let i = 0; i < 18; i++){
        const element = new NgListElement();
        element.content = 'Hello Element ' + i + '!';

        const editActionElement = new NgListElementAction();
        editActionElement.parent = element;
        editActionElement.content = 'edit';
        editActionElement.show = true;
        editActionElement.disabled = true;
        editActionElement.callback = (o) => console.log(o.parent.id);

        const deleteActionElement = new NgListElementAction();
        deleteActionElement.parent = element;
        deleteActionElement.content = 'delete';
        deleteActionElement.show = true;
        editActionElement.callback = (o) => console.log(o.parent.id);

        element.addActionItem(editActionElement);
        element.addActionItem(deleteActionElement);
        listCollection.addListElement(element);
      }
    }
  }


}
