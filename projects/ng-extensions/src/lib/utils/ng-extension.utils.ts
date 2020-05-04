export function isNull(value: any): boolean {
  return value == null;
}
export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}
export function isNumber(value: any): boolean {
  return typeof value === 'number';
}
export function isInt(value: any): boolean {
  return isNumber(value) && value % 1 === 0;
}
export function isFloat(value: any): boolean {
  return isNumber(value) && value % 1 !== 0;
}
export function isPositive(value: any): boolean {
  return isNumber(value) && value > 0;
}
export function isNegative(value: any): boolean {
  return isNumber(value) && value < 0;
}
export function isString(value: any): boolean {
  return typeof value === 'string';
}
export function isArray(value: any): boolean {
  return Array.isArray(value);
}
export function isFunction(value: any): boolean {
  return typeof value === 'function';
}
export function isEmpty(value: any): boolean {
  if (value == null) {
    return true;
  }
  if (isString(value)){
    const s = value as string;
    return s.length === 0;
  }
  if (isArray(value)){
    const v = value as Array<any>;
    return v.length === 0;
  }
  return false;
}
export function flat(value: any): Array<any> {
  if (!isArray(value)){
    return null;
  }
  const arr = value as Array<any>;
  let result = new Array<any>();
  for (const element of arr){
    if (isArray(element)){
      result = result.concat(flat(element));
    }
    else{
      result.push(element);
    }
  }
  return result;
}
export function toUpperCase(value: any): string {
  if (isString(value)){
    return value.toUpperCase();
  }
  else{
    return null;
  }
}
export function toLowerCase(value: any): string {
  if (isString(value)){
    return value.toLowerCase();
  }
  else{
    return null;
  }
}
export function toUpperCaseFirst(value: any): string {
  if (isString(value)){
    return value.slice(0, 1).toUpperCase() + value.slice(1);
  }
  else{
    return null;
  }
}
export function toLowerCaseFirst(value: any): string {
  if (isString(value)){
    return value.slice(0, 1).toLowerCase() + value.slice(1);
  }
  else{
    return null;
  }
}
export function padLeft(value: any, padLength: number, padChar: string): string {
  if (!isString(value)){
    return null;
  }
  return padChar.repeat(padLength) + value;
}
export function padRight(value: any, padLength: number, padChar: string): string {
  if (!isString(value)){
    return null;
  }
  return value + padChar.repeat(padLength);
}
export function pad(value: any, padLengthRight: number, padCharLeft: string, padLengthLeft: number, padCharRight: string): string{
  if (!isString(value)){
    return null;
  }
  return padCharLeft.repeat(padLengthLeft) + value + padCharRight.repeat(padLengthRight);
}
export function repeat(value: any, repeatCnt: number): string{
  if (!isString(value)){
    return null;
  }
  const str = value as string;
  return str.repeat(repeatCnt);
}
export function reverse(value: any): any{
  if (isArray(value)){
    const arr = value as Array<any>;
    return arr.reverse();
  }
  if (isString(value)){
    const arr = reverse(split(value, '')) as Array<string>;
    return arr.join('');
  }
  return null;
}
export function replace(value: any, searchElement: any, replacement: any): any{
  if (isString(value)){
    const str = value as string;
    return str.replace(searchElement, replacement);
  }
  if (isArray(value)){
    const arr = value as Array<any>;
    arr.forEach((part, index, array) => {
      if (part === searchElement){
        array[index] = replacement;
      }
    });
    return arr;
  }
  return null;
}
export function removeNewLines(value: any): string{
  if (!isString(value)){
    return null;
  }
  const str = value as string;
  return str.replace(/^\s+|\s+$/g, '');
}
export function trim(value: any): string{
  if (!isString(value)){
    return null;
  }
  const str = value as string;
  return removeNewLines(str).trim();
}
export function trimHtmlTags(value: any): string{
  if (!isString(value)){
    return null;
  }
  const str = trim(value);
  return str.replace(new RegExp('<[^>]*>', 'gm'), '');
}
export function wrap(value: any, wrapper: string): string{
  if (!isString(value)){
    return null;
  }
  return wrapper + value + wrapper;
}
export function split(value: any, delimiter: string): Array<string>{
  if (!isString(value)){
    return [];
  }
  const str = value as string;
  return str.split(delimiter);
}
export function capitalize(value: any): string{
  if (!isString(value)){
    return null;
  }
  const arr = split(value, ' ');
  arr.forEach((part, index, array) => {
    array[index] = toUpperCaseFirst(toLowerCase(array[index]));
  });
  return arr.join(' ');
}
export function startsWith(value: any, startValue: any): boolean{
  if (isString(value)){
    const str = value as string;
    return str.startsWith(startValue);
  }
  if (isArray(value)){
    const arr = value as Array<any>;
    return arr[0] === startValue;
  }
  return false;
}
export function endsWith(value: any, endValue: any): boolean{
  if (isString(value)){
    const str = value as string;
    return str.endsWith(endValue);
  }
  if (isArray(value)){
    const arr = value as Array<any>;
    return arr[arr.length - 1] === endValue;
  }
  return false;
}
export function contains(value: any, searchValue: any): boolean{
  if (isEmpty(value)){
    return false;
  }
  if (isArray(value) || isString(value)){
    return value.includes(searchValue);
  }
  return false;
}
export function resolveTemplate(value: any, vars: any[], templateChar: string = '$'){
  if (!isString(value)){
    return null;
  }
  if (isEmpty(vars)){
    return value;
  }
  if (vars.length === 1 && !contains(value, '$1')){
    return replace(value, '$', vars[0]);
  }
  vars.forEach((part, index) => {
    value = replace(value, templateChar + (index + 1), part);
  });

  return value;
}
export function sum(value: any): number{
  if (!isArray(value)){
    return 0;
  }
  const arr = value as Array<number>;
  return arr.reduce((a, b) => a + b);
}
export function average(value: any): number{
  if (!isArray(value)){
    return 0;
  }
  const arr = value as Array<number>;
  return sum(arr) / arr.length;
}
export function group(value: any, property: string): Map<string, Array<any>>{
  if (!isArray(value)){
    return null;
  }
  const map: Map<string, Array<any>> = new Map<string, Array<any>>();
  const arr = value as Array<number>;

  arr.forEach((part) => {
    if (!map.has(part[property])){
      map.set(part[property], [part]);
    }
    else{
      map.get(part[property]).push(part);
    }
  });
  return map;
}
