# NgExtensions

![Build](https://github.com/dnagl/ng-extensions/workflows/Build/badge.svg)
![GitHub contributors](https://img.shields.io/github/contributors/dnagl/ng-extensions)
![GitHub](https://img.shields.io/github/license/dnagl/ng-extensions)
[![NPM Version](https://img.shields.io/npm/v/ng-extensions.svg)](https://www.npmjs.com/package/ng-extensions)
[![NPM Downloads](https://img.shields.io/npm/dt/ng-extensions)](https://www.npmjs.com/package/ng-extensions)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/ng-extensions)

## Project

This library provides multiple controls, pipes and providers which can be used in any Angular project.

## Demo :construction:

A demo project will be available soon ...

## Docs

The documentation can be found in the doc directory in the repository. (GitHub)[https://github.com/dnagl/ng-extensions/tree/master/doc]

## Issues, Bugs and Contribution

When finding a bug or issue or if you have ideas for enhancements, 
just create a new issue for this project. If you are confident that you are able to fix your findings or any other issue in the backlog, feel free to contribute to this project.

## Features

The following features can be found in this project.

* Components
  * [List](doc/component/list.md)
  * [Navigation](doc/component/navigation.md)
  * [Notification](doc/component/notification.md)
* Pipes
  * [Arrays](doc/pipe/array.md)
  * [Common](doc/pipe/common.md)
  * [String](doc/pipe/string.md)
  * [Type](doc/pipe/type.md)
* Providers
  * NgLocalStorageProvider
  * NgSessionStorageProvider
* Style
  * Many reusable scss classes for flexbloxes, navigation elements, ...

---

## Installation

The installation of the package can be done with npm.

> `npm i ng-extensions`

The page for the package can be found here: [ng-extensions@npmjs](https://www.npmjs.com/package/ng-extensions)

## Usage

All components, and pipes can be used when adding this line to your `NgModule` of your application.

```javascript
@NgModule({
  ...
  imports: [
    NgExtensionModule
  ],
  ...
})
export class MyApplicationModule {}
```

## Build

Run the following steps to build the project locally.

* `npm install -g @angular\cli`
* `npm install`
* `ng build` for development and `ng build --prod` for production
* `ng serve` for running the demo project locally