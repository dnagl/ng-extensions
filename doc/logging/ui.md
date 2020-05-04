# UI-Logging

With UI-Logging all user interaction with the page can be traced.  
This can be useful for error handling or creating analytics about the user behaviour.

## Usage

To enable the logging, you have to call the `init` method for `NgExtensionLoggingProvider`.  
It's recommended to do this in the main component of your application.

```typescript
export class MyAppComponent {
  constructor(private uiLogProvider: NgExtensionLoggingProvider) {
      uiLogProvider.init([new NgExtensionUiEventLogException('button')]);
      uiLogProvider.events.subscribe((msg) => console.log(msg));
  }
```

After this setup, all UI-Interactions with `butons` can be received through the `uiLogProvider.events` Observable.

The `init` method takes two arguments.  
A list of `NgExtensionUiEventLogException` elements and a `boolean`.  
The boolean value `denyAll` is defaulted to true, so there is not too much logging output.
The list of `NgExtensionUiEventLogException` can be used to modify the ruleset for the raised events.

With `NgExtensionUiEventLogException` elements, the logging can be restricted to certain elements like buttons, spans, inputs, ...

## Properties

### Properties NgExtensionLoggingProvider

|Name|Type|Default|Description|
|----|----|-------|-----------|
|events|`Observable<NgExtensionUiEvent>`|`Observable`|Observable for `<NgExtensionUiEvent>`|

### Properties NgExtensionUiEvent

|Name|Type|Default|Description|
|----|----|-------|-----------|
|events|`Observable<NgExtensionUiEvent>`|`Observable`|Observable for `<NgExtensionUiEvent>`|
|date|`Date`|`new Date()`|Timestamp when the event occurred|
|eventType|`string`|`''`|Type of event|
|xAxis|`number`|`0`|X-Axis where event occurred|
|yAxis|`number`|`0`|Y-Axis where event occurred|
|htmlElementType|`string`|`''`|HTML element type|
|htmlElementId|`string`|`''`|Id of HTML element|
|htmlElementFull|`string`|`''`|Full HTML element|
|eventFull|`any`|`null`|Raw event|


### Properties NgExtensionUiEventLogException

|Name|Type|Default|Description|
|----|----|-------|-----------|
|tagName|`string`|`''`|Tag name of HTML element|
|id|`string`|`''`|Id of HTML element|
|className|`string`|`''`|Class name of HTML element|
