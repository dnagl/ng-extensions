import {Component} from '@angular/core';
import {NgExtensionNavigationProvider} from '../../../ng-extensions/src/lib/component/navigation/ng-extension.navigation.provider';
import {
  NgNavigationBrandElement,
  NgNavigationContext, NgNavigationElement
} from '../../../ng-extensions/src/lib/component/navigation/ng-extension.navigation.model';
import {ComponentComponent} from './component/component.component';
import {NgExtensionLoggingProvider} from '../../../ng-extensions/src/lib/logging/ng-extension.logging.provider';
import {NgExtensionUiEventLogException} from '../../../ng-extensions/src/lib/logging/ng-extension.logging.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider, private uiLogProvider: NgExtensionLoggingProvider) {
    const navigationBrandElement = new NgNavigationBrandElement(false, 'NgExtensions');
    const navigationElements = [
      new NgNavigationElement('Home', 'home', AppComponent),
      new NgNavigationElement('Components', 'touch_app', ComponentComponent, []),
      new NgNavigationElement('Providers', 'settings_ethernet', null, []),
      new NgNavigationElement('Pipes', 'subject', null, [])
    ];

    // uiLogProvider.init([new NgExtensionUiEventLogException('button'), new NgExtensionUiEventLogException('mat-icon')], true);
    // uiLogProvider.events.subscribe((msg) => console.log(msg));
    this.navigationProvider.navigationContextTop = new NgNavigationContext(navigationElements, navigationBrandElement);
  }

}
