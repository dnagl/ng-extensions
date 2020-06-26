import {v5 as uuidv5} from 'uuid';
import {NgExtensionStaticValues} from '../../common/ng-extension.static.values';

export class NgListElement {

  private _id: string;
  private _title: string;
  private _content: string;
  private _textColorTitle: string;
  private _textColorContent: string;
  private _show: boolean;
  private _classList: Array<string>;
  private _actionItems: Array<NgListElementAction>;
  private _data: any;

  constructor(title?: string, content?: string, textColorTitle?: string, textColorContent?, show?: boolean, classList?: Array<string>,
              actionItems?: Array<NgListElementAction>, data?: any) {
    this._id = null;
    this._title = title || '';
    this._content = content || '';
    this._textColorTitle = textColorTitle || '#212121';
    this._textColorContent = textColorContent || '#212121';
    this._show = show;
    this._classList = classList || new Array<string>();
    this._actionItems = actionItems || new Array<NgListElementAction>();
    this._data = data || null;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
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

  get classList(): Array<string> {
    return this._classList;
  }

  set classList(value: Array<string>) {
    this._classList = value;
  }

  get actionItems(): Array<NgListElementAction> {
    return this._actionItems;
  }

  set actionItems(value: Array<NgListElementAction>) {
    this._actionItems = value;
  }

  public addActionItem(action: NgListElementAction): void {
    action.parent = this;
    this.actionItems.push(action);
  }

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }
  get textColorTitle(): string {
    return this._textColorTitle;
  }

  set textColorTitle(value: string) {
    this._textColorTitle = value;
  }

  get textColorContent(): string {
    return this._textColorContent;
  }

  set textColorContent(value: string) {
    this._textColorContent = value;
  }
}

export class NgListElementAction {

  private _isIcon: boolean;
  private _content: string;
  private _color: string;
  private _colorDisabled: string;
  private _show: boolean;
  private _disabled: boolean;
  private _callback: (elementAction: NgListElementAction) => void;
  private _parent: NgListElement;

  constructor(isIcon?: boolean, content?: string, color?: string, colorDisabled?: string, show?: boolean, disabled?: boolean,
              callback?: (elementAction: NgListElementAction) => void, parent?: NgListElement ) {
    this._isIcon = isIcon || true;
    this._content = content || 'edit';
    this._color = color || '#212121';
    this._colorDisabled = colorDisabled || '#E0E0E0';
    this._show = show;
    this._disabled = disabled;
    this._callback = callback || null;
    this._parent = parent || null;
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

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get colorDisabled(): string {
    return this._colorDisabled;
  }

  set colorDisabled(value: string) {
    this._colorDisabled = value;
  }

  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  get callback(): (elementAction: NgListElementAction) => void {
    return this._callback;
  }

  set callback(value: (elementAction: NgListElementAction) => void) {
    this._callback = value;
  }

  get parent(): NgListElement {
    return this._parent;
  }

  set parent(value: NgListElement) {
    this._parent = value;
  }

  public execute() {
    this.callback(this);
  }
}

export class NgListCollection {
  private _id: string;
  private _title: string;
  private _customTitle: boolean;
  private _expand: boolean;
  private _showExpander: boolean;
  private _show: boolean;
  private _backgroundColor: string;
  private _backgroundColorTitle: string;
  private _colorTitle: string;
  private _heightTitle: string;
  private _fontSizeTitle: string;
  private _fontWeightTitle: string;
  private _listElements: Array<NgListElement>;
  private _elementCountTitle: boolean;
  private _elementCountTitleMax: number;
  private _collectionSearch: NgListCollectionSearch;
  private _idGenerator: NgListElementIdGenerator;

  constructor(title?: string, customTitle?: boolean, expand?: boolean, showExpander?: boolean, show?: boolean,
              backgroundColor?: string, backgroundColorTitle?: string, colorTitle?: string, heightTitle?: string, fontSizeTitle?: string,
              fontWeightTitle?: string, listElements?: Array<NgListElement>, elementCountTitle?: boolean, elementCountTitleMax?: number,
              collectionSearch?: NgListCollectionSearch, idGenerator?: NgListElementIdGenerator) {
    this._id = null;
    this._title = title || '';
    this._customTitle = customTitle;
    this._expand = expand;
    this._showExpander = showExpander;
    this._show = show;
    this._backgroundColor = backgroundColor || '#ffffff';
    this._backgroundColorTitle = backgroundColorTitle || '#00E676';
    this._colorTitle = colorTitle || '#212121';
    this._heightTitle = heightTitle || 'auto';
    this._fontSizeTitle = fontSizeTitle || '18px';
    this._fontWeightTitle = fontWeightTitle || '500';
    this._listElements = listElements || new Array<NgListElement>();
    this._elementCountTitle = elementCountTitle || false;
    this._elementCountTitleMax = elementCountTitleMax || 0;
    this._collectionSearch = collectionSearch || null;
    this._idGenerator = idGenerator || null;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get customTitle(): boolean {
    return this._customTitle;
  }

  set customTitle(value: boolean) {
    this._customTitle = value;
  }

  get expand(): boolean {
    return this._expand;
  }

  set expand(value: boolean) {
    this._expand = value;
    this._listElements.forEach(element => element.show = this._expand);
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

  get colorTitle(): string {
    return this._colorTitle;
  }

  set colorTitle(value: string) {
    this._colorTitle = value;
  }


  get heightTitle(): string {
    return this._heightTitle;
  }

  set heightTitle(value: string) {
    this._heightTitle = value;
  }

  get fontSizeTitle(): string {
    return this._fontSizeTitle;
  }

  set fontSizeTitle(value: string) {
    this._fontSizeTitle = value;
  }

  get fontWeightTitle(): string {
    return this._fontWeightTitle;
  }

  set fontWeightTitle(value: string) {
    this._fontWeightTitle = value;
  }

  get listElements(): Array<NgListElement> {
    return this._listElements;
  }

  set listElements(value: Array<NgListElement>) {
    this._listElements = value;
  }

  get showExpander(): boolean {
    return this._showExpander;
  }

  set showExpander(value: boolean) {
    this._showExpander = value;
  }

  get elementCountTitle(): boolean {
    return this._elementCountTitle;
  }

  set elementCountTitle(value: boolean) {
    this._elementCountTitle = value;
  }

  get elementCountTitleMax(): number {
    return this._elementCountTitleMax;
  }

  set elementCountTitleMax(value: number) {
    this._elementCountTitleMax = value;
  }

  get collectionSearch(): NgListCollectionSearch {
    return this._collectionSearch;
  }

  set collectionSearch(value: NgListCollectionSearch) {
    this._collectionSearch = value;
  }

  public addListElement(listElement: NgListElement, data?: any): void {
    listElement.id = this.generateId(listElement, data);
    this._listElements.push(listElement);
  }

  public removeListElement(listElement: NgListElement): void {
    this.listElements = this.listElements.filter(o => o.id !== listElement.id);
  }

  public cleanElements(): void {
    this.listElements = new Array<NgListElement>();
  }

  get idGenerator(): NgListElementIdGenerator {
    return this._idGenerator;
  }

  set idGenerator(value: NgListElementIdGenerator) {
    this._idGenerator = value;
  }

  private generateId(listElement: NgListElement, data?: any): string{
    if (this._idGenerator != null){
      return this.idGenerator(listElement, data);
    }
    else{
      return 'ng-list-collection-element-' + uuidv5(String(Math.random()), NgExtensionStaticValues.NG_EXTENSION_UUID_NAMESPACE);
    }
  }
}

export class NgListCollectionSearch {

  private _searchIcon: string;
  private _caseSensitive: boolean;
  private _fontSize: string;
  private _fontWeight: string;
  private _searchLabel: string;
  private _searchValue: string;
  private _autoFocus: boolean;

  constructor(searchLabel?: string, caseSensitive?: boolean, searchIcon?: string, fontSize?: string, fontWeight?: string,
              searchValue?: string, autoFocus?: boolean) {
    this._searchIcon = searchIcon || 'search';
    this._caseSensitive = caseSensitive;
    this._fontSize = fontSize || '16px';
    this._fontWeight = fontWeight || '400';
    this._searchLabel = searchLabel || 'Search';
    this._searchValue = searchValue || '';
    this._autoFocus = autoFocus || false;
  }

  get searchIcon(): string {
    return this._searchIcon;
  }
  set searchIcon(value: string) {
    this._searchIcon = value;
  }

  get fontSize(): string {
    return this._fontSize;
  }

  set fontSize(value: string) {
    this._fontSize = value;
  }

  get caseSensitive(): boolean {
    return this._caseSensitive;
  }
  set caseSensitive(value: boolean) {
    this._caseSensitive = value;
  }

  get searchLabel(): string {
    return this._searchLabel;
  }
  set searchLabel(value: string) {
    this._searchLabel = value;
  }

  get searchValue(): string {
    return this._searchValue;
  }
  set searchValue(value: string) {
    this._searchValue = value;
  }

  get autoFocus(): boolean {
    return this._autoFocus;
  }
  set autoFocus(value: boolean) {
    this._autoFocus = value;
  }
}

export type NgListElementIdGenerator = (element: NgListElement, data: any) => string;
export type NgListCollectionIdGenerator = (ngListCollection: NgListCollection, data: any) => string;
