import {Component, Input} from "@angular/core";
import {NgNavigationBrandElement, NgNavigationContext} from "../ng-extension.navigation.model";

@Component({
  selector: 'ng-navigation-side',
  templateUrl: './ng-extension.navigation.side.component.html',
  styleUrls: [
    './ng-extension.navigation.side.component..scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationSideComponent {

  public navigationContext: NgNavigationContext;
  public navigationBrandElement: NgNavigationBrandElement;

}
