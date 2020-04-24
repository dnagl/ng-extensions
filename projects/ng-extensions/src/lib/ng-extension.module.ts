import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "./angular-material.module";
import {NgNotificationComponent} from "./component/notification/ng-extension.notification.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgNavigationTopComponent} from "./component/navigation/top/ng-extension.navigation.top.component";
import {NgNavigationSideComponent} from "./component/navigation/side/ng-extension.navigation.side.component";
import {NgExtensionNavigationProvider} from "./component/navigation/ng-extension.navigation.provider";

@NgModule({
  declarations: [
    NgNotificationComponent,
    NgNavigationTopComponent,
    NgNavigationSideComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    NgNotificationComponent,
    NgNavigationTopComponent,
    NgNavigationSideComponent
  ],
  providers: [
    NgExtensionNavigationProvider
  ]
})
export class NgExtensionModule{

}
