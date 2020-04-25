import {Component, OnInit} from "@angular/core";
import {
  NgExtensionNotificationProvider,
  NgNotification, NgNotificationType
} from "../../../../../ng-extensions/src/lib/component/notification/ng-extension.notification.provider";

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: [
    './notification.component.scss'
  ]
})
export class NotificationComponent implements OnInit{

  public notificationTemplate: NgNotification;
  public notificationType = NgNotificationType;

  constructor(public notificationProvider: NgExtensionNotificationProvider) {
  }

  ngOnInit(): void {
    this.notificationTemplate = new NgNotification();
  }

  public raise(): void{
    let notification = new NgNotification();
    notification.type = this.notificationTemplate.type;
    notification.permanent = this.notificationTemplate.permanent;
    notification.duration = this.notificationTemplate.duration;
    notification.closeIcon = this.notificationTemplate.closeIcon;
    notification.title = this.notificationTemplate.title;
    notification.text = this.notificationTemplate.text;
    notification.colorTheme = this.notificationTemplate.colorTheme;
    this.notificationProvider.raiseNotification(notification);
  }

}
