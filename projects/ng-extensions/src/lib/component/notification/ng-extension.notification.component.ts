import {Component, Input} from "@angular/core";
import {NgExtensionsUtils} from "../../common/ng-extensions.utils";

@Component({
  selector: 'ng-notification',
  templateUrl: './ng-extension.notification.component.html',
  styleUrls: [
    '../ng-extension.styles.scss',
    './ng-extension.notification.component.scss'
  ]
})
export class NgNotificationComponent{

  public notificationElements: Array<NgNotification>;

  constructor() {
    this.notificationElements = new Array<NgNotification>();
  }

  public raiseNotification(notification: NgNotification): number{
    notification.id = this.notificationElements.length;
    notification.colorTheme = ColorTheme.find(o => o.type == notification.type);
    this.notificationElements.push(notification);
    if(!notification.permanent){
      NgExtensionsUtils.delay(notification.duration)
        .then(() => {this.removeNotification(notification.id)});
    }
    return notification.id
  }

  public removeNotification(id: number){
    this.notificationElements = this.notificationElements.filter(o => o.id != id);
  }

}

export class NgNotification{

  private _id: number = 0;
  private _title: string = "Notification";
  private _text: string = "This is a notification";
  private _permanent: boolean = false;
  private _duration: number = 2000;
  private _type: NgNotificationType = NgNotificationType.INFO;
  private _colorTheme: any;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get permanent(): boolean {
    return this._permanent;
  }

  set permanent(value: boolean) {
    this._permanent = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get type(): NgNotificationType {
    return this._type;
  }

  set type(value: NgNotificationType) {
    this._type = value;
  }

  get colorTheme(): any {
    return this._colorTheme;
  }

  set colorTheme(value: any) {
    this._colorTheme = value;
  }
}

export enum NgNotificationType{
  INFO,
  SUCCESS,
  WARN,
  ERROR
}

const ColorTheme = [
  {
    type: NgNotificationType.INFO,
    backgroundTitle: "#0068FF",
    backgroundText: "#0052CC",
    fontColor: "#ffffff"
  },
  {
    type: NgNotificationType.SUCCESS,
    backgroundTitle: "#04BF33",
    backgroundText: "#038C25",
    fontColor: "#ffffff"
  },
  {
    type: NgNotificationType.WARN,
    backgroundTitle: "#F2E205",
    backgroundText: "#BFB304",
    fontColor: "#ffffff"
  },
  {
    type: NgNotificationType.ERROR,
    backgroundTitle: "#F20505",
    backgroundText: "#BF0404",
    fontColor: "#ffffff"
  }
];
