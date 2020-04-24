import {Injectable} from "@angular/core";
import {NgNavigationContext} from "./ng-extension.navigation.model";

@Injectable()
export class NgExtensionNavigationProvider{

  private _navigationContextTop: NgNavigationContext;
  private _navigationContextSide: NgNavigationContext;

  constructor() {
  }


  get navigationContextTop(): NgNavigationContext {
    return this._navigationContextTop;
  }

  set navigationContextTop(value: NgNavigationContext) {
    this._navigationContextTop = value;
  }

  get navigationContextSide(): NgNavigationContext {
    return this._navigationContextSide;
  }

  set navigationContextSide(value: NgNavigationContext) {
    this._navigationContextSide = value;
  }
}
