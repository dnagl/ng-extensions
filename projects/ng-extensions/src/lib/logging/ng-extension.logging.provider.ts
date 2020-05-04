import {Injectable} from '@angular/core';
import {NgExtensionUiEvent, NgExtensionUiEventLogException} from './ng-extension.logging.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {contains, isEmpty, isUndefined} from '../utils/ng-extension.utils';

@Injectable()
export class NgExtensionLoggingProvider{

  private _isInit = false;
  private _denyAll: boolean;
  private _logRules: Array<NgExtensionUiEventLogException>;
  private _events: BehaviorSubject<NgExtensionUiEvent> = new BehaviorSubject<NgExtensionUiEvent>(null);

  public readonly events: Observable<NgExtensionUiEvent> = this._events.asObservable();

  public init(logRules: Array<NgExtensionUiEventLogException> = [], denyAll: boolean = true): void{
    this._logRules = logRules;
    this._denyAll = denyAll;

    if (!this._isInit){
      Object.keys(window).forEach(key => {
        if (/./.test(key)){
          window.addEventListener(key.slice(2), event => {
            this.logEvent(key, event);
          });
        }
      });
      this._isInit = true;
    }
  }

  private logEvent(key: string, event: any): void{
    if (this._denyAll && isEmpty(this._logRules)){
      return;
    }

    let logExceptionRuleFound = false;

    if (isUndefined(event.target.id)){
      logExceptionRuleFound = !isEmpty(this._logRules.filter(
        o => contains(event.target.classList, o.className) ||
        event.target.localName === o.tagName));
    }
    else{
      logExceptionRuleFound = !isEmpty(this._logRules.filter(
        o => contains(event.target.classList, o.className) ||
          event.target.id === o.id ||
          event.target.localName === o.tagName));
    }

    if (this._denyAll === logExceptionRuleFound){
      const uiEvent = new NgExtensionUiEvent(event.type,
        event.pageX, event.pageY,
        event.target.tagName.toLowerCase(),
        event.target.tagName.id,
        event.target,
        event);
      this._events.next(uiEvent);
    }
  }

}
