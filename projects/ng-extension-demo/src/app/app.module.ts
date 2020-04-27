import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgExtensionModule} from "../../../ng-extensions/src/lib/ng-extension.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotificationComponent} from "./component/notification/notification.component";
import {AngularMaterialModule} from "../../../ng-extensions/src/lib/angular-material.module";
import {FormsModule} from "@angular/forms";
import {ComponentComponent} from "./component/component.component";
import {ListComponent} from "./component/list/notification.component";

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ListComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgExtensionModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
