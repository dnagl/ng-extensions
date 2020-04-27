import {Component} from "@angular/core";

export class NgNavigationContext{

  private _navigationElements: Array<NgNavigationElement>;
  private _navigationBrandElement: NgNavigationBrandElement;


  constructor(navigationElements: Array<NgNavigationElement> = new Array<NgNavigationElement>(), navigationBrandElement: NgNavigationBrandElement = new NgNavigationBrandElement()) {
    this._navigationElements = navigationElements;
    this._navigationBrandElement = navigationBrandElement;
  }

  get navigationElements(): Array<NgNavigationElement> {
    return this._navigationElements;
  }

  set navigationElements(value: Array<NgNavigationElement>) {
    this._navigationElements = value;
  }

  get navigationBrandElement(): NgNavigationBrandElement {
    return this._navigationBrandElement;
  }

  set navigationBrandElement(value: NgNavigationBrandElement) {
    this._navigationBrandElement = value;
  }
}

export class NgNavigationElement{

  private _name: string;
  private _matIcon: string;
  private _children: Array<NgNavigationElement>;
  private _component: any;

  constructor(name: string = 'element', matIcon: string = 'home', component: any = null, children: Array<NgNavigationElement> = new Array<NgNavigationElement>()) {
    this._name = name;
    this._matIcon = matIcon;
    this._component = component;
    this._children = children;
  }

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

  get component(): Component {
    return this._component;
  }

  set component(value: Component) {
    this._component = value;
  }
}

export class NgNavigationBrandElement{

  private _image: boolean;
  private _content: string;

  constructor(image: boolean = false, content: string = 'home') {
    this._image = image;
    this._content = content;
  }

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
