# NotificationComponent

The notification component can be used to display notifications on the page.  
The notifications will be displayed on the right bottom corner of the page and stack up to the top.
They can contain as many text you want.
 
## Usage

```html
    `<ng-notification [width]="400"></ng-notification>`
```

```typescript
export class MyComponent{

  constructor(public notificationProvider: NgExtensionNotificationProvider) {
  }

}
```

### Example: raise notifications

To raise a notification, you have to create a new `NgNotification` object and pass this to the `NgExtensionNotificationProvider.raiseNotification` method.

This example shows how you can raise a notification.
In this example the `permanent` proeprty is set to true, so the notification will keep showing up until the user clicks on the closing icon. 

The closing icon can be customized. It can be any icon which is found in the Angular [Material Icon Set](https://material.io/resources/icons)

```typescript
  public raise(): void{
    let notification = new NgNotification();
    notification.type = NgNotificationType.SUCCESS;
    notification.permanent = true;
    notification.closeIcon = 'close';
    notification.title = 'I am a notification';
    notification.text = 'I will be visible until someone closes me.';
    notification.colorTheme = this.notificationTemplate.colorTheme;
    this.notificationProvider.raiseNotification(notification);
  }
```

In this example the `permaent` property is set to false, so the notification will disappear after the given time in milliseconds.
In this example the notification would disappear in 5 seconds.

```typescript
  public raise(): void{
    let notification = new NgNotification();
    notification.type = NgNotificationType.SUCCESS;
    notification.permanent = false;
    notification.duration = 5000;
    notification.closeIcon = 'close';
    notification.title = 'I am a notification';
    notification.text = 'I will be visible until someone closes me.';
    notification.colorTheme = this.notificationTemplate.colorTheme;
    this.notificationProvider.raiseNotification(notification);
  }
```

## Properties

### Properties NgNotificationComponent

|Name|Type|Default|Description|
|----|----|-------|-----------|
|width|`number`|`200`|Width of notifications|

### Properties NgExtensionNotificationProvider

|Name|Type|Default|Description|
|----|----|-------|-----------|
|notificationElements|`Array<NgNotification>`|`[]`|All current displayed notifications.|

### Properties NgNotification
|Name|Type|Default|Description|
|----|----|-------|-----------|
|id|`number`|`0`|Id of the notification object|
|title|`string`|`"Notification"`|Title of the notification|
|closeIcon|`string`|`"clear"`|Closing icon for notification|
|text|`string`|`"This is a notification"`|Text of notification|
|permanent|`boolean`|`false`|Notification keeps showing until user closes it|
|duration|`number`|`3500`|Only when `permanent == false`. Time of notification visible in ms|
|type|`NgNotificationType`|`NgNotificationType.INFO`|Notification type [INFO, SUCCESS, WARN, ERROR]|
|colorTheme|`any`|Color Theme which defines the colors which are used for the different notification types|

## Methods

### Methods NgExtensionNotificationProvider

|Method|Return Type|Description|
|------|-----------|-----------|
|`raiseNotification(notification: NgNotification)`|`number`|Raise a new notification and return the generated id of the object.|
|`removeNotification(id: number)`|`void`|Remove a notification element by its given id.|

## Color scheme

Also the color scheme is customizable.  
There is already a defined color scheme which is applied out of the box.

```javascript
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
```
