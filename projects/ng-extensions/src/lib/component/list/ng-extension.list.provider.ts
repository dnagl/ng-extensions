import {Injectable} from "@angular/core";
import {NgExtensionListCollection} from "./ng-extension.list.model";

@Injectable()
export class NgExtensionListProvider{

  private _listCollections: Array<NgExtensionListCollection>;

  constructor() {
    this.cleanListCollections();
  }

  get listCollections(): Array<NgExtensionListCollection> {
    return this._listCollections;
}
  set listCollections(value: Array<NgExtensionListCollection>) {
    this._listCollections = value;
  }

  public addListCollection(listCollection: NgExtensionListCollection): void{
    listCollection.id = this._listCollections.length == 0 ? 0 : this._listCollections[this._listCollections.length - 1].id + 1;
    this.listCollections.push(listCollection);
  }

  public removeListCollection(listCollection: NgExtensionListCollection): void{
    this.listCollections = this.listCollections.filter(o => o.id != listCollection.id);
  }

  public cleanListCollections(): void{
    this._listCollections = new Array<NgExtensionListCollection>();
  }

}
