import {async} from "@angular/core/testing";
import {
  flat, isArray, isEmpty, isFloat, isFunction, isInt,
  isNegative,
  isNull,
  isNumber,
  isPositive, isString,
  isUndefined,
  toLowerCase, toLowerCaseFirst,
  toUpperCase, toUpperCaseFirst
} from "./ng-extension.utils";

describe('NgExtension Utils', () => {
  it('isNull', async(() => {
    const x = null;
    const y = {};
    expect(isNull(x)).toBeTrue();
    expect(isNull(y)).toBeFalse();
  }));

  it('isUndefined', async(() => {
    const x = null;
    const y = {};
    expect(isUndefined(x)).toBeFalse();
    expect(isUndefined(y)).toBeFalse();
  }));

  it('isNumber', async(() => {
    const x = 1;
    const y = -5;
    const z = 'number';
    expect(isNumber(x)).toBeTrue();
    expect(isNumber(y)).toBeTrue();
    expect(isNumber(z)).toBeFalse();
  }));

  it('isInt', async(() => {
    const x = 1;
    const y = -50;
    const z = 30.58;
    expect(isInt(x)).toBeTrue();
    expect(isInt(y)).toBeTrue();
    expect(isInt(z)).toBeFalse();
  }));

  it('isFloat', async(() => {
    const x = 1.5;
    const y = -3.5;
    const z = 5;
    expect(isFloat(x)).toBeTrue();
    expect(isFloat(y)).toBeTrue();
    expect(isFloat(z)).toBeFalse();
  }));

  it('isPositive', async(() => {
    const x = 5;
    const y = -5;
    expect(isPositive(x)).toBeTrue();
    expect(isPositive(y)).toBeFalse();
  }));

  it('isNegative', async(() => {
    const x = -5;
    const y = 5;
    expect(isNegative(x)).toBeTrue();
    expect(isNegative(y)).toBeFalse();
  }));

  it('isString', async(() => {
    const x = 'Hello world!';
    const y = {};
    expect(isString(x)).toBeTrue();
    expect(isString(y)).toBeFalse();
  }));

  it('isArray', async(() => {
    const x = [];
    const y = [[],[],[[],[]]];
    const z = {};
    expect(isArray(x)).toBeTrue();
    expect(isArray(y)).toBeTrue();
    expect(isArray(z)).toBeFalse();
  }));

  it('isFunction', async(() => {
    const x = function(){return true;};
    const y = {};
    expect(isFunction(x)).toBeTrue();
    expect(isFunction(y)).toBeFalse();
  }));

  it('isEmpty', async(() => {
    const a1 = [];
    const a2 = [1, 2, 3];
    const s1 = '';
    const s2 = 'string';
    const o1 = null;
    const o2 = {};

    expect(isEmpty(a1)).toBeTrue();
    expect(isEmpty(s1)).toBeTrue();
    expect(isEmpty(o1)).toBeTrue();
    expect(isEmpty(a2)).toBeFalse();
    expect(isEmpty(s2)).toBeFalse();
    expect(isEmpty(o2)).toBeFalse();
  }));

  it('flat', async(() => {
    const x = [1, 2, 3, ['hello', ['world', ['!']]]];
    const y = [1, 2, 3, 'hello', 'world', '!'];
    expect(flat(x)).toEqual(y);
  }));

  it('toUpperCase', async(() => {
    const x = 'abCdefGhiJKLMnopQRStuvWXYZ';
    expect(toUpperCase(x)).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }));

  it('toLowerCase', async(() => {
    const x = 'abCdefGhiJKLMnopQRStuvWXYZ';
    expect(toLowerCase(x)).toEqual('abcdefghijklmnopqrstuvwxyz');
  }));

  it('toUpperCaseFirst', async(() => {
    const x = 'abCdefGhiJKLMnopQRStuvWXYZ';
    expect(toUpperCaseFirst(x)).toEqual('AbCdefGhiJKLMnopQRStuvWXYZ');
  }));

  it('toLowerCaseFirst', async(() => {
    const x = 'AbCdefGhiJKLMnopQRStuvWXYZ';
    expect(toLowerCaseFirst(x)).toEqual('abCdefGhiJKLMnopQRStuvWXYZ');
  }));
});
