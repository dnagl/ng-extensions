import {Injectable} from '@angular/core';
import {v5 as uuidv5} from 'uuid';
import {NgListCollection, NgListCollectionIdGenerator} from './ng-extension.list.model';
import {NgExtensionStaticValues} from '../../common/ng-extension.static.values';
import {isEmpty} from '../../utils/ng-extension.utils';

@Injectable()
export class NgExtensionListProvider {

  private _listCollections: Array<NgListCollection>;
  private _idGenerator: NgListCollectionIdGenerator;

  constructor() {
    this.cleanListCollections();
  }

  get listCollections(): Array<NgListCollection> {
    return this._listCollections;
  }

  set listCollections(value: Array<NgListCollection>) {
    this._listCollections = value;
  }

  get idGenerator(): NgListCollectionIdGenerator {
    return this._idGenerator;
  }

  set idGenerator(value: NgListCollectionIdGenerator) {
    this._idGenerator = value;
  }

  public addListCollection(listCollection: NgListCollection, data?: any): void {
    listCollection.id = this.generateId(listCollection, data);
    this.listCollections.push(listCollection);
  }

  public removeListCollection(listCollection: NgListCollection): void {
    this.listCollections = this.listCollections.filter(o => o.id !== listCollection.id);
  }

  public cleanListCollections(): void {
    this._listCollections = new Array<NgListCollection>();
  }

  private generateId(listCollection: NgListCollection, data?: any): string{
    if (this._idGenerator != null){
      return this.idGenerator(listCollection, data);
    }
    else{
      return 'ng-list-collection-' + uuidv5(String(Math.random()), NgExtensionStaticValues.NG_EXTENSION_UUID_NAMESPACE);
    }
  }

}
