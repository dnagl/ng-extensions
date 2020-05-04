# Common Pipes

- [IsEmpty](#isempty)
- [Replace](#replace)
- [Reverse](#reverse)
- [Contains](#contains)
- [StartsWith](#startswith)
- [EndsWith](#endswith)
- [ToArray](#toarray)

---

<a name="isempty"></a>
## IsEmpty

### Description

Returns `boolean` if passed value is empty or null.
Can be used for strings, arrays and other objects which can be `null`.

### Usage

```angular2htmlhtml
{{ [] | isEmpty }} <!-- returns true -->

{{ '' | isEmpty }} <!-- returns true -->

{{ null | isEmpty }} <!-- returns true -->

{{ [1, 2, 3] | isEmpty }} <!-- returns false -->

{{ 'hello world!' | isEmpty }} <!-- returns false -->
```

<a name="replace"></a>
## Replace

### Description

Replaces a given element in a string or array.

### Usage

```angular2html
{{ 'Hello World' | replace: 'World': 'JS!' }} <!-- returns 'Hello JS!' -->
{{ [1, 2, 3, 4, 'Hello World'] | replace: 'Hello World': 5 }} <!-- returns [1, 2, 3, 4, 5] -->
```

<a name="reverse"></a>
## Reverse

### Description

Reverses a string or array.

### Usage

```angular2html
{{ 'Hello World' | reverse }} <!-- returns 'dlroW olleH' -->
{{ [1, 2, 3, 4] | reverse }} <!-- returns [4, 3, 2, 1] -->
```

<a name="contains"></a>
## Contains

### Description

Check if a string or array contains a given element.

### Usage

```angular2html
{{ 'Hello World' | contains: 'Hello' }} <!-- returns true -->
{{ [1, 2, 3, 4] | contains: 4 }} <!-- returns true -->
{{ [1, 2, 3, 4] | contains: 5 }} <!-- returns false -->
```

<a name="startswith"></a>
## StartsWith

### Description

Check if a string or array starts with a given element.

### Usage

```angular2html
{{ 'Hello World' | startsWith: 'Hello' }} <!-- returns true -->
{{ [1, 2, 3, 4] | startsWith: 1 }} <!-- returns true -->
{{ [1, 2, 3, 4] | startsWith: 2 }} <!-- returns false -->
```

<a name="endswith"></a>
## EndsWith

### Description

Check if a string or array ends with a given element.

### Usage

```angular2html
{{ 'Hello World' | endsWith: 'World' }} <!-- returns true -->
{{ [1, 2, 3, 4] | endsWith: 4 }} <!-- returns true -->
{{ [1, 2, 3, 4] | endsWith: 3 }} <!-- returns false -->
```

<a name="toarray"></a>
## ToArray

### Description

Converts a object to an array containing the values of the object.

### Usage

```angular2html
{{ {title: 'Hello World', content: 'Lorem ipsum'} | toArray }} <!-- returns ['Hello World', 'Lorem ipsum'] -->
```
