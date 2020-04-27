import {Component} from "@angular/core";
import {NgExtensionNavigationProvider} from "../ng-extension.navigation.provider";
import {Router} from "@angular/router";

@Component({
  selector: 'ng-navigation-side',
  templateUrl: './ng-extension.navigation.side.component.html',
  styleUrls: [
    './ng-extension.navigation.side.component.scss',
    '../../ng-extension.styles.scss'
  ]
})
export class NgNavigationSideComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider, private router: Router) {
  }

  public getComponentPath(component: Component): string{
    return '/' + this.router.config.find(o => o.component == component).path;
  }

}
