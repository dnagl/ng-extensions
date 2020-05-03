import {Injectable} from '@angular/core';
import {AbstractStorage} from './ng-extension.storage';

@Injectable()
export class NgLocalStorageProvider extends AbstractStorage {

  constructor() {
    super();
  }

  public init(): void {
    for (const key of Object.keys(localStorage)) {
      this._valueMap.set(key, sessionStorage.getItem(key));
    }
  }

  public setValue(key: string, value: string): void {
    localStorage.setItem(key, value);
    this._valueMap.set(key, this.getValue(key));
  }

  public getValue(key: string): string {
    if (this._valueMap == null || this._valueMap.size === 0){
      this.init();
    }
    return localStorage.getItem(key);
  }

}
