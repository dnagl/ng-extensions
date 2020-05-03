# Type

## IsDefined

### Description

Returns `boolean` if passed value is defined.

### Usage

```javascript
let x;
```

```angular2
{{ x | isDefined }} <!-- returns 'true' -->
{{ {} | isDefined }} <!-- returns 'false' -->
```

## IsNull

### Description

Returns `boolean` if passed value is null.

### Usage

```javascript
let x = null;
```

```angular2
{{ x | isNull }} <!-- returns 'true' -->
{{ {} | isNull }} <!-- returns 'false' -->
```

## IsNumber

### Description

Returns `boolean` if passed value is a number.

### Usage

```angular2
{{ 1.5 | isNumber }} <!-- returns 'true' -->
{{ 'test' | isNumber }} <!-- returns 'false' -->
```

## IsInt

### Description

Returns `boolean` if passed value is int.

### Usage

```angular2
{{ 2 | isInt }} <!-- returns 'true' -->
{{ 1.5 | isInt }} <!-- returns 'false' -->
```

## IsFloat

### Description

Returns `boolean` if passed value is float.

### Usage

```angular2
{{ 1.5 | isFloat }} <!-- returns 'true' -->
{{ 2 | isFloat }} <!-- returns 'false' -->
```

## IsPositive

### Description

Returns `boolean` if passed value is a positive number.

### Usage

```angular2
{{ 300 | isPositive }} <!-- returns 'true' -->
{{ -5 | isPositive }} <!-- returns 'false' -->
```

## IsNegative

### Description

Returns `boolean` if passed value is a negative number.

### Usage

```angular2
{{ 300 | isNegative }} <!-- returns 'true' -->
{{ -5 | isNegative }} <!-- returns 'false' -->
```

## IsFunction

### Description

Returns `boolean` if passed value is a function.

### Usage

```javascript
let x = function(){echo('Hello world!')};
```

```angular2
{{ x | isFunction }} <!-- returns 'true' -->
{{ 'this is not a function' | prop }} <!-- returns 'false' -->
```

## Prop

### Description

Returns an array of the properties of a given object

### Usage

```angular2
{{ {} | prop }} <!-- returns '[]' -->

{{ {text: 'property'} | prop }} <!-- returns '['text']' -->
```
