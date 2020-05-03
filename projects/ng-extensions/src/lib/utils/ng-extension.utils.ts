export function isNull(value: any): boolean{
  return value == null;
}
export function isUndefined(value: any): boolean{
  return typeof value === 'undefined';
}
export function isNumber(value: any): boolean{
  return typeof value === 'number';
}
export function isInt(value: any): boolean{
  return isNumber(value) && value % 1 == 0;
}
export function isFloat(value: any): boolean{
  return isNumber(value) && value % 1 !== 0;
}
export function isPositive(value: any): boolean{
  return isNumber(value) && value > 0;
}
export function isNegative(value: any): boolean{
  return isNumber(value) && value < 0;
}
export function isString(value: any): boolean{
  return typeof value === 'string';
}
export function isArray(value: any): boolean{
  return Array.isArray(value);
}
export function isFunction(value: any): boolean {
  return typeof value === 'function'
}
export function isEmpty(value: any): boolean{
  if(value == null) return true;
  if(isString(value)){
    let s = value as string;
    return s.length == 0;
  }
  if(isArray(value)){
    let v = value as Array<any>;
    return v.length == 0;
  }
  return false;
}
export function flat(value: any): Array<any>{
  if(!isArray(value)) return null;
  let arr = value as Array<any>;
  let result = new Array<any>();
  for(let element of arr){
    if(isArray(element)) result = result.concat(flat(element));
    else result.push(element);
  }
  return result;
}
export function toUpperCase(value: any): string{
  if(isString(value)) return value.toUpperCase();
  else return null;
}
export function toLowerCase(value: any): string{
  if(isString(value)) return value.toLowerCase();
  else return null;
}
export function toUpperCaseFirst(value: any): string{
  if(isString(value)) return value.slice(0, 1).toUpperCase() + value.slice(1);
  else return null;
}
export function toLowerCaseFirst(value: any): string{
  if(isString(value)) return value.slice(0, 1).toLowerCase() + value.slice(1);
  else return null;
}
