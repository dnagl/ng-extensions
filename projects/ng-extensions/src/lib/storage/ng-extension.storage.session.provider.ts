import {Injectable} from "@angular/core";
import {AbstractStorage} from "./ng-extension.storage";

@Injectable()
export class SessionStorageProvider extends AbstractStorage {

  constructor() {
    super()
  }

  public init(): void {
    for (let key in Object.keys(sessionStorage)) {
      this._valueMap.set(key, sessionStorage.getItem(key));
    }
  }

  public setValue(key: string, value: string): void {
    sessionStorage.setItem(key, value);
    this._valueMap.set(key, this.getValue(key));
  }

  public getValue(key: string): string {
    if (this._valueMap == null || this._valueMap.size == 0) this.init();
    return sessionStorage.getItem(key);
  }

}
