import {Injectable} from "@angular/core";

@Injectable()
export class NgExtensionNotificationProvider{

  private _notificationElements: Array<NgNotification>;

  constructor() {
    this.notificationElements = new Array<NgNotification>();
  }

  get notificationElements(): Array<NgNotification> {
    return this._notificationElements;
  }

  set notificationElements(value: Array<NgNotification>) {
    this._notificationElements = value;
  }

  public raiseNotification(notification: NgNotification): number{
    notification.id = Math.floor(Math.random() * 100) + 1;
    notification.colorTheme = ColorTheme.find(o => o.type == notification.type);
    this.notificationElements.push(notification);
    if(!notification.permanent){
      setTimeout(() => {this.removeNotification(notification.id);}, notification.duration);
    }
    return notification.id
  }

  public removeNotification(id: number): void{
    this.notificationElements = this.notificationElements.filter(o => o.id != id);
  }

}

export class NgNotification{

  private _id: number = 0;
  private _title: string = "Notification";
  private _closeIcon: string = "clear";
  private _text: string = "This is a notification";
  private _permanent: boolean = false;
  private _duration: number = 3500;
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

  get closeIcon(): string {
    return this._closeIcon;
  }

  set closeIcon(value: string) {
    this._closeIcon = value;
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
    backgroundTitle: "#0052CC",
    backgroundText: "#0068FF",
    fontColor: "#ffffff"
  },
  {
    type: NgNotificationType.SUCCESS,
    backgroundTitle: "#038C25",
    backgroundText: "#04BF33",
    fontColor: "#ffffff"
  },
  {
    type: NgNotificationType.WARN,
    backgroundTitle: "#F2B705",
    backgroundText: "#F2CB05",
    fontColor: "#ffffff"
  },
  {
    type: NgNotificationType.ERROR,
    backgroundTitle: "#BF0404",
    backgroundText: "#F20505",
    fontColor: "#ffffff"
  }
];
