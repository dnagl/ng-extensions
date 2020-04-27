# Notification Component

## Overview

The notification component can be used to display notiications on the page.  
The notifications will be displayed on the right bottom corner of the page and stack up to the top.
They can contain as many text you want.

## Usage

### Setup

To use this component, you have to add the following tag to your HTML code.  
`<ng-notification></ng-notification>`

In your component class you can use the injectable `NotificationComponent` class to raise notifications.

### Raising notifications

To raise a notification, you have to create a new `NgNotification` object and pass this to the `NgExtensionNotificationProvider.raiseNotification` method.

This example shows how you can raise a notification.
In this example the `permanent` proeprty is set to true, so the notification will keep showing up until the user clicks on the closing icon. 

The closing icon can be customized. It can be any icon which is found in the Angular [Material Icon Set](https://material.io/resources/icons)

```javascript
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

```javascript
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

### Width

You can customize the width in pixels of your notifications directly in the HTML tag.

`<ng-notification [width]="350"></ng-notification>`

In this case you set the width of the notifications to 350px.

### Color scheme

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

Whe setting up a new notificaiton object, you can set the `colorTheme` property to your customized theme.

### 