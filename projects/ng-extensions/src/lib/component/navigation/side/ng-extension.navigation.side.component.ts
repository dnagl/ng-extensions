import {Component, Input} from "@angular/core";
import {NgExtensionNavigationProvider} from "../ng-extension.navigation.provider";

@Component({
  selector: 'ng-navigation-side',
  templateUrl: './ng-extension.navigation.side.component.html',
  styleUrls: [
    './ng-extension.navigation.side.component..scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationSideComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider) {
  }

}
