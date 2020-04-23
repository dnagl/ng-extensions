import {Component} from "@angular/core";
import {NgExtensionNavigationProvider} from "../ng-extension.navigation.provider";

@Component({
  selector: 'ng-navigation-top',
  templateUrl: './ng-extension.navigation.top.component.html',
  styleUrls: [
    './ng-extension.navigation.top.component.scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationTopComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider) {
  }

}
