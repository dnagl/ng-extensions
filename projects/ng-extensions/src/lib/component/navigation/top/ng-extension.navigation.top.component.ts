import {Component} from "@angular/core";
import {NgExtensionNavigationProvider} from "../ng-extension.navigation.provider";
import {Router} from "@angular/router";

@Component({
  selector: 'ng-navigation-top',
  templateUrl: './ng-extension.navigation.top.component.html',
  styleUrls: [
    './ng-extension.navigation.top.component.scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationTopComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider, private router: Router) {
  }

  public getComponentPath(component: Component): string{
    return '/' + this.router.config.find(o => o.component == component).path;
  }

}
