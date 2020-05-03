# Common

## IsEmpty

### Description

Returns `boolean` if passed value is empty or null.
Can be used for strings, arrays and other objects which can be `null`.

### Usage

```angular2
{{ [] | isEmpty }} <!-- returns true -->

{{ '' | isEmpty }} <!-- returns true -->

{{ null | isEmpty }} <!-- returns true -->

{{ [1, 2, 3] | isEmpty }} <!-- returns false -->

{{ 'hello world!' | isEmpty }} <!-- returns false -->
```
