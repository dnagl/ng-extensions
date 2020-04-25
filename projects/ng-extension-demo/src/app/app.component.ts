import {Component} from '@angular/core';
import {NgExtensionNavigationProvider} from "../../../ng-extensions/src/lib/component/navigation/ng-extension.navigation.provider";
import {
  NgNavigationBrandElement,
  NgNavigationContext, NgNavigationElement
} from "../../../ng-extensions/src/lib/component/navigation/ng-extension.navigation.model";
import {NotificationComponent} from "./component/notification/notification.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider) {
    let navigationBrandElement: NgNavigationBrandElement = new NgNavigationBrandElement(false, "NgExtensions");
    let navigationElements: Array<NgNavigationElement> = [
      new NgNavigationElement('Home', 'home', AppComponent),
      new NgNavigationElement('Components', 'touch_app', NotificationComponent,[]),
      new NgNavigationElement('Providers', 'settings_ethernet', null, []),
      new NgNavigationElement('Pipes', 'subject', null, []),
    ];

    this.navigationProvider.navigationContextTop = new NgNavigationContext(navigationElements, navigationBrandElement);
  }

}
