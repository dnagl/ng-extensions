# Array

## First

### Description

Returns the first element in an array.

### Usage

```angular2
{{ [1, 2, 3] | first }} <!-- returns '1' -->
```

## Last

### Description

Returns the last element in an array.

### Usage

```angular2
{{ [1, 2, 3] | last }} <!-- returns '3' -->
```


## Flat

### Description

Flattens a multi dimensional array to a one dimensional array.

### Usage

```angular2
{{ [1, 2, 3] | flat }} <!-- returns '[1, 2, 3]' -->
{{ [1, 2, 3, [4]] | flat }} <!-- returns '[1, 2, 3, 4]' -->
{{ [1, 2, 3, [[4], [5, [6]]]] | flat }} <!-- returns '[1, 2, 3, 4, 5, 6]' -->
```
## Join

### Description

Returns a `string` containing all elements of an array.  
By default the pipe uses no delimiter to join the elements, but when given, the array will be joined with the given delimiter string.

### Usage

```angular2
{{ [1, 2, 3] | join }} <!-- returns '123' -->

{{ [1, 2, 3] | join: ';' }} <!-- returns '1;2;3' -->

```
