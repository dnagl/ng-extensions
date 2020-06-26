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
      listCollection.collectionSearch.autoFocus = true;
      listCollection.showExpander = true;
      listCollection.expand = true;
      listCollection.heightTitle = '80px';
      listCollection.colorTitle = 'red';
      this.listProvider.addListCollection(listCollection);

      for (let i = 0; i < 18; i++){
        const element = new NgListElement();
        element.content = 'Hello Element ' + i + '!';

        const addActionElement = new NgListElementAction();
        addActionElement.parent = element;
        addActionElement.content = 'content_copy';
        addActionElement.show = true;
        addActionElement.disabled = false;
        addActionElement.callback = (o) => {
          listCollection.addListElement(addActionElement.parent);
        };

        const editActionElement = new NgListElementAction();
        editActionElement.parent = element;
        editActionElement.content = 'edit';
        editActionElement.show = true;
        editActionElement.disabled = true;
        editActionElement.callback = (o) => console.log(o.parent.id);

        const deleteActionElement = new NgListElementAction(true, 'delete', null, null, true, false, (o) => this.removeElement(o.parent, listCollection), element);

        element.addActionItem(addActionElement);
        element.addActionItem(editActionElement);
        element.addActionItem(deleteActionElement);
        listCollection.addListElement(element);
      }
    }
  }

  public removeElement(element: NgListElement, listCollection: NgListCollection){
    listCollection.listElements = listCollection.listElements.filter(o => o.id !== element.id);
    console.log(listCollection.listElements);
  }

}
