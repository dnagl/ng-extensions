import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "./angular-material.module";
import {NgNotificationComponent} from "./component/notification/ng-extension.notification.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {NgNavigationTopComponent} from "./component/navigation/top/ng-extension.navigation.top.component";
import {NgNavigationSideComponent} from "./component/navigation/side/ng-extension.navigation.side.component";
import {NgExtensionNavigationProvider} from "./component/navigation/ng-extension.navigation.provider";
import {NgNavigationLayoutComponent} from "./component/navigation/layout/ng-extension.navigation.layout.component";
import {RouterModule} from "@angular/router";
import {NgExtensionNotificationProvider} from "./component/notification/ng-extension.notification.provider";
import {LocalStorageProvider} from './storage/ng-extension.storage.local.provider';
import {SessionStorageProvider} from './storage/ng-extension.storage.session.provider';
import {NgListElementComponent} from "./component/list/element/ng-extension.list.element.component";
import {NgListCollectionComponent} from "./component/list/collection/ng-extension.list.collection.component";
import {NgExtensionListProvider} from "./component/list/ng-extension.list.provider";
import {NgListGalleryComponent} from "./component/list/gallery/ng-extension.list.gallery.component";
import {NgExtensionPipeModule} from "./pipe/ng-extension.pipe.module";

@NgModule({
  declarations: [
    NgListCollectionComponent,
    NgListElementComponent,
    NgListGalleryComponent,
    NgNotificationComponent,
    NgNavigationLayoutComponent,
    NgNavigationSideComponent,
    NgNavigationTopComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule,
    NgExtensionPipeModule
  ],
  exports: [
    NgListCollectionComponent,
    NgListElementComponent,
    NgListGalleryComponent,
    NgNotificationComponent,
    NgNavigationLayoutComponent,
    NgNavigationSideComponent,
    NgNavigationTopComponent,
    NgExtensionPipeModule
  ],
  providers: [
    NgExtensionListProvider,
    NgExtensionNavigationProvider,
    NgExtensionNotificationProvider,
    LocalStorageProvider,
    SessionStorageProvider
  ]
})
export class NgExtensionModule {

}
