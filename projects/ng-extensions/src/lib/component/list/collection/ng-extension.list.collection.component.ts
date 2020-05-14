import {Component, Input} from '@angular/core';
import {NgExtensionListProvider} from '../ng-extension.list.provider';
import {NgListCollection, NgListElement} from '../ng-extension.list.model';

@Component({
  selector: 'ng-list-collection',
  templateUrl: './ng-extension.list.collection.component.html',
  styleUrls: [
    '../../ng-extension.styles.scss',
    './ng-extension.list.collection.component.scss'
  ]
})
export class NgListCollectionComponent {

  private _id: string;
  public showSearch = false;
  public listCollection: NgListCollection;

  constructor(public listProvider: NgExtensionListProvider) {
  }

  get id(): string {
    return this._id;
  }

  @Input('collectionId')
  set id(value: string) {
    this._id = value;
    this.listCollection = this.listProvider.listCollections.find(o => o.id === this._id);
  }

  public setSearchVisibility(visible: boolean){
    this.showSearch = visible;
    this.listCollection.collectionSearch.searchValue = '';
  }

  public filteredElements(): Array<NgListElement>{
    if (this.listCollection.collectionSearch.caseSensitive){
      return this.listCollection.listElements.filter(o =>
        o.title.indexOf(this.listCollection.collectionSearch.searchValue) > -1 ||
        o.content.indexOf(this.listCollection.collectionSearch.searchValue) > -1);
    }
    else{
      return this.listCollection.listElements.filter(o =>
        o.title.toLowerCase().indexOf(this.listCollection.collectionSearch.searchValue.toLowerCase()) > -1 ||
        o.content.toLowerCase().indexOf(this.listCollection.collectionSearch.searchValue.toLowerCase()) > -1);
    }
  }
}
