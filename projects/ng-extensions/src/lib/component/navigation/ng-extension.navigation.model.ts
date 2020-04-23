export class NgNavigationContext{

  private _navigationElements: Array<NgNavigationElement>;


  get navigationElements(): Array<NgNavigationElement> {
    return this._navigationElements;
  }

  set navigationElements(value: Array<NgNavigationElement>) {
    this._navigationElements = value;
  }
}

export class NgNavigationElement{

  private _name: string;
  private _matIcon: string;
  private _children: Array<NgNavigationElement>;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get matIcon(): string {
    return this._matIcon;
  }

  set matIcon(value: string) {
    this._matIcon = value;
  }

  get children(): Array<NgNavigationElement> {
    return this._children;
  }

  set children(value: Array<NgNavigationElement>) {
    this._children = value;
  }
}

export class NgNavigationBrandElement{

  private _image: boolean;
  private _content: string;

  get image(): boolean {
    return this._image;
  }

  set image(value: boolean) {
    this._image = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}
