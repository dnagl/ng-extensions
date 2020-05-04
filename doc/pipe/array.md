# Array Pipes

- [First](#first)
- [Last](#last)
- [Flat](#flat)
- [Join](#join)
- [Average](#average)
- [Min](#min)
- [Max](#max)
- [Sum](#sum)
- [Group](#group)

---

<a name="first"></a>
## First

### Description

Returns the first element in an array.

### Usage

```angular2html
{{ [1, 2, 3] | first }} <!-- returns '1' -->
```

<a name="last"></a>
## Last

### Description

Returns the last element in an array.

### Usage

```angular2html
{{ [1, 2, 3] | last }} <!-- returns '3' -->
```

<a name="flat"></a>
## Flat

### Description

Flattens a multi dimensional array to a one dimensional array.

### Usage

```angular2html
{{ [1, 2, 3] | flat }} <!-- returns '[1, 2, 3]' -->
{{ [1, 2, 3, [4]] | flat }} <!-- returns '[1, 2, 3, 4]' -->
{{ [1, 2, 3, [[4], [5, [6]]]] | flat }} <!-- returns '[1, 2, 3, 4, 5, 6]' -->
```

<a name="join"></a>
## Join

### Description

Returns a `string` containing all elements of an array.  
By default the pipe uses no delimiter to join the elements, but when given, the array will be joined with the given delimiter string.

### Usage

```angular2html
{{ [1, 2, 3] | join }} <!-- returns '123' -->

{{ [1, 2, 3] | join: ';' }} <!-- returns '1;2;3' -->

```

<a name="average"></a>
## Average

### Description

Calculate the average of the numeric values in an array;

### Usage

```angular2html
{{ [1, 2, 3] | average }} <!-- returns 2 -->

```

<a name="min"></a>
## Min

### Description

Returns the lowest numeric value of an array.

### Usage

```angular2html
{{ [1, 2, 3] | min }} <!-- returns 1 -->

```

<a name="max"></a>
## Max

### Description

Returns the highest numeric value of an array.

### Usage

```angular2html
{{ [1, 2, 3] | max }} <!-- returns 3 -->

```

<a name="sum"></a>
## Sum

### Description

Returns the sum of all numeric values in an array.

### Usage

```angular2html
{{ [1, 2, 3] | sum }} <!-- returns 6 -->

```

<a name="group"></a>
## Group

### Description

Group objects in an array by their property.  
Returns a map where the key is the value grouped by property and the value is an array of all the equal elements based on the given property.  

### Usage

```typescript
    const fruits = [
      { fruit: 'apple', count: 10},
      { fruit: 'banana', count: 5},
      { fruit: 'kiwi', count: 30},
      { fruit: 'banana', count: 20}
    ];
```
```angular2html
{{ fuits | group: 'fruit' }}
```
```json
[
  ["apple", [ {"fruit":"apple", "count":10 } ]],
  ["banana", [ {"fruit":"banana", "count":5}, {"fruit":"banana", "count":20} ]],
  ["kiwi", [ {"fruit":"kiwi", "count":30} ]]
]
```
