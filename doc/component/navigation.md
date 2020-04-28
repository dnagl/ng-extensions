# NavigationTopComponent

This component provides a navigation bar which is intended to stick to the top of the page.

## Usage

```html
<ng-navigation-top></ng-navigation-top>
```

```typescript
export class MyComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider) {
    let navigationBrandElement: NgNavigationBrandElement = new NgNavigationBrandElement(false, "NgExtensions");
    let navigationElements: Array<NgNavigationElement> = [
      new NgNavigationElement('Home', 'home', AppComponent),
      new NgNavigationElement('Components', 'touch_app', ComponentComponent,[]),
      new NgNavigationElement('Providers', 'settings_ethernet', null, []),
      new NgNavigationElement('Pipes', 'subject', null, []),
    ];

    this.navigationProvider.navigationContextTop = new NgNavigationContext(navigationElements, navigationBrandElement);
  }

}
```

# NavigationSideComponent

This component provides a navigation bar which is intended to stick to the side of the page.

## Usage

```html
<ng-navigation-side></ng-navigation-side>
```

```typescript
export class MyComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider) {
    let navigationBrandElement: NgNavigationBrandElement = new NgNavigationBrandElement(false, "NgExtensions");
    let navigationElements: Array<NgNavigationElement> = [
      new NgNavigationElement('Home', 'home', AppComponent),
      new NgNavigationElement('Components', 'touch_app', ComponentComponent,[]),
      new NgNavigationElement('Providers', 'settings_ethernet', null, []),
      new NgNavigationElement('Pipes', 'subject', null, []),
    ];

    this.navigationProvider.navigationContextSide = new NgNavigationContext(navigationElements, navigationBrandElement);
  }

}
```

# NavigationSideComponent

This component provides a layout which contains a top and side navigation bar.
Also this component integrates the angular `<router-outlet><router-outlet>` element and places it  
so that the navigation fits around the provided content.

## Usage

```html
<ng-navigation-layout></ng-navigation-layout>
```

```typescript
export class MyComponent {

  constructor(public navigationProvider: NgExtensionNavigationProvider) {
    let navigationBrandElement: NgNavigationBrandElement = new NgNavigationBrandElement(false, "NgExtensions");
    let navigationElements: Array<NgNavigationElement> = [
      new NgNavigationElement('Home', 'home', AppComponent),
      new NgNavigationElement('Components', 'touch_app', ComponentComponent,[]),
      new NgNavigationElement('Providers', 'settings_ethernet', null, []),
      new NgNavigationElement('Pipes', 'subject', null, []),
    ];

    this.navigationProvider.navigationContextTop = new NgNavigationContext(navigationElements, navigationBrandElement);
    this.navigationProvider.navigationContextSide = new NgNavigationContext(navigationElements, navigationBrandElement);
  }

}
```

# Properties

## Properties NgNavigationContext  

|Name|Type|Default|Description|
|----|----|-------|-----------|
|navigationElements|`Array<NgNavigationElement>`|`[]`|List of NgNavigationElement objects|
|navigationBrandElement|`NgNavigationBrandElement`|`null`|Brand element for navigation bar|

## Properties NgNavigationBrandElement

|Name|Type|Default|Description|
|----|----|-------|-----------|
|image|`boolean`|`false`|Content is image|
|content|`string`|`''`|Content|

## Properties NgNavigationElement

|Name|Type|Default|Description|
|----|----|-------|-----------|
|name|`string`|`element`|Title of element|
|matIcon|`string`|`home`|Material icon name|
|component|`any`|`null`|Target component where the route should point|
|children|`Array<NgNavigationElement>`|`[]`|Navigation children of element|

## Properties NgExtensionNavigationProvider

|Name|Type|Default|Description|
|----|----|-------|-----------|
|navigationContextTop|`NgNavigationContext`|`null`|NgNavigationContext for top navigation bar|
|navigationContextSide|`NgNavigationContext`|`null`|NgNavigationContext for side navigation bar|
