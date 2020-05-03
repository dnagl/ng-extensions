import {Component, Input, OnInit} from '@angular/core';
import {NgExtensionListProvider} from '../ng-extension.list.provider';
import {NgListCollection} from '../ng-extension.list.model';

@Component({
  selector: 'ng-list-collection',
  templateUrl: './ng-extension.list.collection.component.html',
  styleUrls: [
    '../../ng-extension.styles.scss',
    './ng-extension.list.collection.component.scss'
  ]
})
export class NgListCollectionComponent {

  private _id: number;
  public listCollection: NgListCollection;

  constructor(public listProvider: NgExtensionListProvider) {
  }

  get id(): number {
    return this._id;
  }

  @Input('collectionId')
  set id(value: number) {
    this._id = value;
    this.listCollection = this.listProvider.listCollections.find(o => o.id === this._id);
  }
}
