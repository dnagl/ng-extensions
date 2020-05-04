# Type Pipes

- [IsDefined](#isdefined)
- [IsNull](#isnull)
- [IsNumber](#isnumber)
- [IsInt](#isint)
- [IsFloat](#isfloat)
- [IsPositive](#ispositive)
- [IsNegative](#isNegative)
- [IsFunction](#isFunction)
- [Prop](#prop)

---

<a name="isdefined"></a>
## IsDefined

### Description

Returns `boolean` if passed value is defined.

### Usage

```javascript
let x;
```

```angular2html
{{ x | isDefined }} <!-- returns 'true' -->
{{ {} | isDefined }} <!-- returns 'false' -->
```

<a name="isnull"></a>
## IsNull

### Description

Returns `boolean` if passed value is null.

### Usage

```javascript
let x = null;
```

```angular2html
{{ x | isNull }} <!-- returns 'true' -->
{{ {} | isNull }} <!-- returns 'false' -->
```

<a name="isnumber"></a>
## IsNumber

### Description

Returns `boolean` if passed value is a number.

### Usage

```angular2html
{{ 1.5 | isNumber }} <!-- returns 'true' -->
{{ 'test' | isNumber }} <!-- returns 'false' -->
```

<a name="isint"></a>
## IsInt

### Description

Returns `boolean` if passed value is int.

### Usage

```angular2html
{{ 2 | isInt }} <!-- returns 'true' -->
{{ 1.5 | isInt }} <!-- returns 'false' -->
```

<a name="isfloat"></a>
## IsFloat

### Description

Returns `boolean` if passed value is float.

### Usage

```angular2html
{{ 1.5 | isFloat }} <!-- returns 'true' -->
{{ 2 | isFloat }} <!-- returns 'false' -->
```

<a name="ispositive"></a>
## IsPositive

### Description

Returns `boolean` if passed value is a positive number.

### Usage

```angular2html
{{ 300 | isPositive }} <!-- returns 'true' -->
{{ -5 | isPositive }} <!-- returns 'false' -->
```

<a name="isnegative"></a>
## IsNegative

### Description

Returns `boolean` if passed value is a negative number.

### Usage

```angular2html
{{ 300 | isNegative }} <!-- returns 'true' -->
{{ -5 | isNegative }} <!-- returns 'false' -->
```

<a name="isfunction"></a>
## IsFunction

### Description

Returns `boolean` if passed value is a function.

### Usage

```javascript
let x = function(){echo('Hello world!')};
```

```angular2html
{{ x | isFunction }} <!-- returns 'true' -->
{{ 'this is not a function' | prop }} <!-- returns 'false' -->
```

<a name="prop"></a>
## Prop

### Description

Returns an array of the properties of a given object

### Usage

```angular2html
{{ {} | prop }} <!-- returns '[]' -->

{{ {text: 'property'} | prop }} <!-- returns '['text']' -->
```
