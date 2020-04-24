import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgExtensionModule} from "../../../ng-extensions/src/lib/ng-extension.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotificationComponent} from "./notification/notification.component";
import {AngularMaterialModule} from "../../../ng-extensions/src/lib/angular-material.module";
import {FormsModule} from "@angular/forms";
import {NgExtensionPipeModule} from "../../../ng-extensions/src/lib/pipe/ng-extension.pipe.module";

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgExtensionModule,
    AngularMaterialModule,
    AppRoutingModule,
    NgExtensionPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
