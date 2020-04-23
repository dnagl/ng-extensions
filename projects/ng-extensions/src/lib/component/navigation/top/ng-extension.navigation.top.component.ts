import {Component, Input} from "@angular/core";
import {NgNavigationBrandElement, NgNavigationContext} from "../ng-extension.navigation.model";

@Component({
  selector: 'ng-navigation-top',
  templateUrl: './ng-extension.navigation.top.component.html',
  styleUrls: [
    './ng-extension.navigation.top.component.scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationTopComponent {

  public navigationContext: NgNavigationContext;
  public navigationBrandElement: NgNavigationBrandElement;



}
