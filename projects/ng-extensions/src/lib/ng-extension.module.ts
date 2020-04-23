import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "./angular-material.module";
import {NgNotificationComponent} from "./component/notification/ng-extension.notification.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgNavigationTopComponent} from "./component/navigation/top/ng-extension.navigation.top.component";
import {NgNavigationSideComponent} from "./component/navigation/side/ng-extension.navigation.side.component";
import {NgExtensionNavigationProvider} from "./component/navigation/ng-extension.navigation.provider";
import {NgNavigationLayoutComponent} from "./component/navigation/layout/ng-extension.navigation.layout.component";

@NgModule({
  declarations: [
    NgNotificationComponent,
    NgNavigationLayoutComponent,
    NgNavigationSideComponent,
    NgNavigationTopComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    NgNotificationComponent,
    NgNavigationLayoutComponent,
    NgNavigationSideComponent,
    NgNavigationTopComponent
  ],
  providers: [
    NgExtensionNavigationProvider
  ]
})
export class NgExtensionModule{

}
