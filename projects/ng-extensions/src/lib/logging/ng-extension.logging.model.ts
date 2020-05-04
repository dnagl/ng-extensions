export class NgExtensionUiEvent{
  private _date: Date;
  private _eventType: string;
  private _xAxis: number;
  private _yAxis: number;
  private _htmlElementType: string;
  private _htmlElementId: string;
  private _htmlElementFull: string;
  private _eventFull: any;

  constructor(eventType: string, xAxis: number, yAxis: number, htmlElementType: string,
              htmlElementId: string, htmlElementFull: string, eventFull: any) {
    this._date = new Date();
    this._xAxis = xAxis;
    this._yAxis = yAxis;
    this._eventType = eventType;
    this._htmlElementType = htmlElementType;
    this._htmlElementId = htmlElementId;
    this._htmlElementFull = htmlElementFull;
    this._eventFull = eventFull;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get eventType(): string {
    return this._eventType;
  }

  set eventType(value: string) {
    this._eventType = value;
  }

  get xAxis(): number {
    return this._xAxis;
  }

  set xAxis(value: number) {
    this._xAxis = value;
  }

  get yAxis(): number {
    return this._yAxis;
  }

  set yAxis(value: number) {
    this._yAxis = value;
  }

  get htmlElementType(): string {
    return this._htmlElementType;
  }

  set htmlElementType(value: string) {
    this._htmlElementType = value;
  }

  get htmlElementId(): string {
    return this._htmlElementId;
  }

  set htmlElementId(value: string) {
    this._htmlElementId = value;
  }

  get htmlElementFull(): string {
    return this._htmlElementFull;
  }

  set htmlElementFull(value: string) {
    this._htmlElementFull = value;
  }

  get eventFull(): any {
    return this._eventFull;
  }

  set eventFull(value: any) {
    this._eventFull = value;
  }
}

export class NgExtensionUiEventLogException{

  private _tagName: string;
  private _id: string;
  private _className: string;

  constructor(tagName: string = null, id: string = null, className: string = null) {
    this._tagName = tagName;
    this._id = id;
    this._className = className;
  }

  get tagName(): string {
    return this._tagName;
  }

  set tagName(value: string) {
    this._tagName = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }
}
