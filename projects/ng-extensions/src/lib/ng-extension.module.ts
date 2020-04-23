import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "./angular-material.module";
import {NgNotificationComponent} from "./component/notification/ng-extension.notification.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgNavigationTopComponent} from "./component/navigation/top/ng-extension.navigation.top.component";

@NgModule({
  declarations: [
    NgNotificationComponent,
    NgNavigationTopComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    NgNotificationComponent,
    NgNavigationTopComponent
  ],
  providers: []
})
export class NgExtensionModule{

}
