import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "./angular-material.module";
import {NgNotificationComponent} from "./component/notification/ng-extension.notification.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    NgNotificationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    NgNotificationComponent
  ],
  providers: []
})
export class NgExtensionModule{

}
