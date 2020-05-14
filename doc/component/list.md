# ListElement

The `<ng-list-element>` component is used to wrap up the information which a list element can hold.

## Usage

```html
<ng-list-element [height]="40px" [listElement]="listElementObj"></ng-list-element>
```

# ListCollection

A `<ng-list-collection>` combines multiple `<ng-list-elements>` and adds a header on top of all elements.
 
## Usage

```html
    <ng-list-collection [collectionId]="5"></ng-list-collection>
```

```typescript
export class MyComponent{

  constructor(public listProvider: NgExtensionListProvider) {
  }

}
```

# ListGallery

When multiple `<ng-list-collection>` elements are needed besides each other, a `<ng-list-gallery>` element can be used.
This will display all `<ng-list-collection>` elements which are available in the `NgExtensionListProvider`
and marked as `show=true`. 

## Usage

```html
    <ng-list-gallery></ng-list-gallery>
```

```typescript
export class MyComponent {

  constructor(public listProvider: NgExtensionListProvider) {
  }

}
```

# Properties

## Properties NgListElement

|Name|Type|Default|Description|
|----|----|-------|-----------|
|id|`string`|`null`|Id of the element. Gets set automatically when using a NgListCollection.|
|title|`string`|`''`|Title of the list element. Can be null.|
|content|`string`|`''`|Content of the list element. Can be null.|
|textColorTitle|`string`|`'#212121'`|Font color of the title of the list element. Can be null.|
|textColorContent|`string`|`'#212121'`|Font color of the content of the list element. Can be null.|
|show|`boolean`|`true`|Element is visible.|
|classList|`Array<string>`|`[]`|Holds extra classes which can be cutom added and removed|
|actionItems|`Array<NgListElementAction>`|`[]`|Holds visible element actions|
|data|`any`|`null`|Contains custom data which can be needed when action gets executed|

## Properties NgListElementAction

|Name|Type|Default|Description|
|----|----|-------|-----------|
|isIcon|`boolean`|`true`|If Material Icons should be used|
|content|`string`|`''`|Icon name or text|
|color|`string`|`''`|Font color of content|
|show|`boolean`|`true`|Element is visible.|
|callback|`(elementAction: NgListElementAction): void`|`null`|Callback which gets called when button is pressed|
|parent|`NgListElement`|`null`|Parent `NgListElement` of action object|

## Properties NgListCollection

|Name|Type|Default|Description|
|----|----|-------|-----------|
|id|`string`|`null`|Id of object. Gets set automatically when using NgExtensionListProvider.|
|title|`string`|`''`|Title of the list collection.|
|customTitle|`boolean`|`false`|Allow custom HTML as title.|
|expand|`boolean`|`true`|List collection is expanded.|
|showExpander|`boolean`|`true`|Show the expander of the list collection.|
|show|`boolean`|`true`|Collection is visible|
|backgroundColor|`string`|`#ffffff`|Background color of collection|
|backgroundColorTitle|`string`|`#00E676`|Background color of collection title|
|colorTitle|`string`|`#000000`|Font color for title|
|heightTitle|`string`|`auto`|Height of title|
|fontSizeTitle|`string`|`18px`|Font size of title|
|fontWeightTitle|`string`|`500`|Font weight of title|
|listElements|`Array<NgListElement>`|`[]`|Elements in collection|
|collectionSearch|`NgListCollectionSearch`|`null`|Search for `NgListCollection`|
|idGenerator|`NgListCollectionIdGenerator`|`null`|Custom ID generator for `NgListElement`|

## Properties NgExtensionListProvider

|Name|Type|Default|Description|
|----|----|-------|-----------|
|listCollections|`Array<NgListCollection>`|`[]`|All available list collection objects|
|idGenerator|`NgListCollectionIdGenerator`|`null`|Custom ID generator for `NgListCollection`|

## Properties NgListCollectionSearch 

|Name|Type|Default|Description|
|----|----|-------|-----------|
|searchIcon|`string`|`search`|Icon which is displayed in header for switching to search|
|caseSensitive|`boolean`|`false`|Search is case sensitive|
|fontSize|`string`|`16px`|Font size for search|
|fontWeight|`string`|`400`|Font weight for search|
|searchLabel|`string`|`Search`|Label for input field|
|searchValue|`string`|`''`|Search Value (used by input field)|

# Methods

## Methods NgExtensionListProvider

|Method|Return Type|Description|
|------|-----------|-----------|
|`addListCollection(listCollection: NgListCollection, data?: any)`|`void`|Add a NgListCollection object|
|`removeListCollection(listCollection: NgListCollection)`|`void`|Remove a NgListCollection object|
|`cleanListCollections()`|`void`|Delete all NgListCollection objects|

# Type

## NgListElementIdGenerator

Generate custom ID for `NgListElement`.
```typescript
export type NgListElementIdGenerator = (element: NgListElement, data: any) => string;
```

## NgListCollectionIdGenerator 

Generate custom ID for `NgListCollection`.
```typescript
export type NgListCollectionIdGenerator = (ngListCollection: NgListCollection, data: any) => string;
```
