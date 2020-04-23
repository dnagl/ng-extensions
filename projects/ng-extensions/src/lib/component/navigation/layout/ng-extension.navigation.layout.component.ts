import {Component} from "@angular/core";
import {NgNavigationBrandElement, NgNavigationContext} from "../ng-extension.navigation.model";

@Component({
  selector: 'ng-navigation-layout',
  templateUrl: './ng-extension.navigation.layout.component.html',
  styleUrls: [
    './ng-extension.navigation.layout.component.scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationLayoutComponent {

  public navigationContext: NgNavigationContext;
  public navigationBrandElement: NgNavigationBrandElement;

}
