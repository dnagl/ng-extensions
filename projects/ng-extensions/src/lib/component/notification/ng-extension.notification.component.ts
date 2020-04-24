import {Component, Input} from "@angular/core";
import {NgExtensionNotificationProvider} from "./ng-extension.notification.provider";

@Component({
  selector: 'ng-notification',
  templateUrl: './ng-extension.notification.component.html',
  styleUrls: [
    '../ng-extension.styles.scss',
    './ng-extension.notification.component.scss'
  ]
})
export class NgNotificationComponent{

  @Input() width: number = 100;

  constructor(public notificationProvider: NgExtensionNotificationProvider) {

  }

}
