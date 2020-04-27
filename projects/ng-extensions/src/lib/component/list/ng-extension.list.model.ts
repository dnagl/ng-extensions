export class NgListElement{

  private _id: number;
  private _title: string;
  private _content: string;
  private _show: boolean;
  private _actionItems: Array<NgListElementAction>;

  constructor(id: number = 0, title: string = '', content: string = '', show: boolean = true, actionItems: Array<NgListElementAction> = new Array<NgListElementAction>()) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._show = show;
    this._actionItems = actionItems;
  }

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

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }

  get actionItems(): Array<NgListElementAction> {
    return this._actionItems;
  }

  set actionItems(value: Array<NgListElementAction>) {
    this._actionItems = value;
  }

  public addActionItem(action: NgListElementAction): void{
    this.actionItems.push(action);
  }
}

export class NgListElementAction{

  private _isIcon: boolean;
  private _content: string;
  private _color: string;
  private _callback: {(elementAction: NgListElementAction): void;};

  constructor(isIcon: boolean = true, content: string = 'edit', color: string = '#000000', callback: { (elementAction: NgListElementAction): void } = null) {
    this._isIcon = isIcon;
    this._content = content;
    this._color = color;
    this._callback = callback;
  }

  get isIcon(): boolean {
    return this._isIcon;
  }

  set isIcon(value: boolean) {
    this._isIcon = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get callback(): { (elementAction: NgListElementAction): void } {
    return this._callback;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  set callback(value: { (elementAction: NgListElementAction): void }) {
    this._callback = value;
  }

  public execute(){
    this.callback(this);
  }
}

export class NgListCollection{

  private _id: number;
  private _title: string;
  private _expand: boolean;
  private _show: boolean;
  private _backgroundColor: string;
  private _backgroundColorTitle: string;
  private _listElements: Array<NgListElement>;

  constructor(id: number = 0, title: string = '', expand: boolean = true, show: boolean = true, backgroundColor: string = '#ffffff', backgroundColorTitle: string = '#00E676', listElements: Array<NgListElement> = new Array<NgListElement>()) {
    this._id = id;
    this._title = title;
    this._expand = expand;
    this._show = show;
    this._backgroundColor = backgroundColor;
    this._backgroundColorTitle = backgroundColorTitle;
    this._listElements = listElements;
  }

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

  get expand(): boolean {
    return this._expand;
  }

  set expand(value: boolean) {
    this._expand = value;
    this._listElements.forEach( element => element.show = this._expand);
  }

  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }

  get backgroundColor(): string {
    return this._backgroundColor;
  }

  set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  get backgroundColorTitle(): string {
    return this._backgroundColorTitle;
  }

  set backgroundColorTitle(value: string) {
    this._backgroundColorTitle = value;
  }

  get listElements(): Array<NgListElement> {
    return this._listElements;
  }

  set listElements(value: Array<NgListElement>) {
    this._listElements = value;
  }

  public addListElement(listElement: NgListElement): void{
    listElement.id = this._listElements.length == 0 ? 0 : this._listElements[this._listElements.length - 1].id + 1;
    this._listElements.push(listElement);
  }

  public removeListElement(listCollection: NgListElement): void{
    this.listElements = this.listElements.filter(o => o.id != listCollection.id);
  }

  public cleanElements(): void{
    this.listElements = new Array<NgListElement>();
  }
}
