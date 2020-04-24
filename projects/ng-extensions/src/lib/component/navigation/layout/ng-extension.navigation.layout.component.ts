import {Component} from "@angular/core";
import {NgExtensionNavigationProvider} from "../ng-extension.navigation.provider";

@Component({
  selector: 'ng-navigation-layout',
  templateUrl: './ng-extension.navigation.layout.component.html',
  styleUrls: [
    './ng-extension.navigation.layout.component.scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationLayoutComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider) {
  }

}
