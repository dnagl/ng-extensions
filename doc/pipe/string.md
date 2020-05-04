# String Pipes

- [ToLower](#tolower)
- [ToLowerFirst](#tolowerfirst)
- [ToUpper](#toupper)
- [ToUpperFirst](#toupperfirst)
- [PadLeft](#padleft)
- [PadRight](#padright)
- [Pad](#pad)
- [Repeat](#repeat)
- [Capitalize](#capitalize)
- [RemoveNewLines](#removenewlines)
- [ResolveTemplate](#resolvetemplate)
- [Split](#split)
- [Trim](#trim)
- [TrimHtml](#trimhtml)
- [Wrap](#wrap)

---

<a name="tolower"></a>
## ToLower

### Description

Returns a lowercase string.

### Usage

```angular2html
{{ 'Test Pipe' | toLower }} <!-- returns 'test pipe' -->
```

<a name="tolowerFirst"></a>
## ToLowerFirst

### Description

Returns a string with a lowercase character at start.

### Usage

```angular2html
{{ 'Test Pipe' | toLowerFirst }} <!-- returns 'test Pipe' -->
```

<a name="toupper"></a>
## ToUpper

### Description

Returns a uppercase string.

### Usage

```angular2html
{{ 'test pipe' | toUpper }} <!-- returns 'TEST PIPE' -->
```

<a name="toupperfirst"></a>
## ToUpperFirst

### Description

Returns a string with a uppercase character at start.

### Usage

```angular2html
{{ 'test pipe' | toUpperFirst }} <!-- returns 'Test pipe' -->
```

<a name="padleft"></a>
## PadLeft

### Description

Returns a left-padded string.

### Usage

```angular2html
{{ 'test pipe' | padLeft: 3 }} <!-- returns '   Test pipe' -->
{{ 'test pipe' | padLeft: 3: '!' }} <!-- returns '!!!Test pipe' -->
```

<a name="padright"></a>
## PadRight

### Description

Returns a right-padded string.

### Usage

```angular2html
{{ 'test pipe' | padRight: 3 }} <!-- returns 'Test pipe   ' -->
{{ 'test pipe' | padRight: 3: '!' }} <!-- returns 'Test pipe!!!' -->
```

<a name="pad"></a>
## Pad

### Description

Returns a padded string.

### Usage

```angular2html
{{ 'test pipe' | pad: 3: 3 }} <!-- returns '   Test pipe   ' -->
{{ 'test pipe' | pad: 3: 5: '!': '@' }} <!-- returns '!!!Test pipe@@@@@' -->
```

<a name="repeat"></a>
## Repeat

### Description

Repeats a string x times.

### Usage

```angular2html
{{ 'ABC123' | repeat: 3 }} <!-- returns 'ABC123ABC123ABC123' -->
```

<a name="capitalize"></a>
## Capitalize

### Description

Capitalizes a string.

### Usage

```angular2html
{{ 'hEllO wORLD!' | capitalize }} <!-- returns 'Hello World!' -->
```

<a name="removenewlines"></a>
## RemoveNewLines

### Description

Remove `\n` from string.

### Usage

```angular2html
{{ '\nHello \nWorld!' | removeNewLines }} <!-- returns 'Hello World!' -->
```

<a name="resolvetemplate"></a>
## ResolveTemplate

### Description

Resoles template string with given variables

### Usage

```angular2html
{{ 'Hello $1!' | resolveTemplate: ['World'] }} <!-- returns 'Hello World!' -->
{{ '$1 $2!' | resolveTemplate: ['Hello', 'World'] }} <!-- returns 'Hello World!' -->
```

<a name="split"></a>
## Split

### Description

Splits a string into an array by a given delimiter.  
As default delimiter a whitespace character is used.

### Usage

```angular2html
{{ 'Hello World!' | split }} <!-- returns ['Hello', 'World!'] -->
{{ 'Hello,World!' | split: ',' }} <!-- returns ['Hello', 'World!'] -->
```

<a name="trim"></a>
## Trim

### Description

Removes all leading and trailing whitespace and newline characters.

### Usage

```angular2html
{{ '  Hello World! \n' | trim }} <!-- returns 'Hello World!' -->
```

<a name="trimhtml"></a>
## TrimHtml

### Description

Removes all leading and trailing whitespace and newline characters and removes HTML tags around content.

### Usage

```angular2html
{{ '<span class="_50685029 truncate flex-auto">ng-extensions</span>' | trimHtml }} <!-- returns 'ng-extensions' -->
```

<a name="wrap"></a>
## Wrap

### Description

Wraps a string between a given wrapping string.

### Usage

```angular2html
{{ 'Hello World!' | wrap: '|' }} <!-- returns '|Hello World!|' -->
```
