import {async} from '@angular/core/testing';
import {
  average,
  capitalize, contains, endsWith,
  flat, group, isArray, isEmpty, isFloat, isFunction, isInt,
  isNegative,
  isNull,
  isNumber,
  isPositive, isString,
  isUndefined, pad, padLeft, padRight, removeNewLines, repeat, replace, resolveTemplate, reverse, split, startsWith, sum,
  toLowerCase, toLowerCaseFirst,
  toUpperCase, toUpperCaseFirst, trim, trimHtmlTags, wrap
} from './ng-extension.utils';

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
    const y = [[], [], [[], []]];
    const z = {};
    expect(isArray(x)).toBeTrue();
    expect(isArray(y)).toBeTrue();
    expect(isArray(z)).toBeFalse();
  }));

  it('isFunction', async(() => {
    const x = () => true;
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

  it('padLeft', async(() => {
    const x = 'Hello world!';
    const y = {};

    expect(padLeft(x, 3, '@')).toEqual('@@@' + x);
    expect(padLeft(y, 3, '@')).toBeNull();
  }));

  it('padRight', async(() => {
    const x = 'Hello world!';
    const y = {};

    expect(padRight(x, 3, '@')).toEqual(x + '@@@');
    expect(padRight(y, 3, '@')).toBeNull();
  }));

  it('pad', async(() => {
    const x = 'Hello world!';
    const y = {};

    expect(pad(x, 3, '@', 3, '!')).toEqual('@@@' + x + '!!!');
    expect(pad(y, 3, '@', 3, '!')).toBeNull();
  }));

  it('repeat', async () => {
    const x = 'repeat me!';
    const y = {};

    expect(repeat(x, 50)).toEqual(x.repeat(50));
    expect(repeat(y, 50)).toBeNull();
  });

  it('reverse', async () => {
    const x = 'Hello World!';
    const y = ['1', 2, 3, {}];

    expect(reverse(x)).toEqual('!dlroW olleH');
    expect(reverse(y)).toEqual([{}, 3, 2, '1']);
  });

  it('replace', async () => {
    const x = 'Hello World!';
    const y = [1, 2, 3, 4, x];

    expect(replace(x, 'Hello', 'Welcome')).toEqual('Welcome World!');
    expect(replace(x, 'xxx', 'test')).toEqual(x);
    expect(replace(y, x, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(replace(y, 500, 5)).toEqual(y);
  });

  it('removeNewLines', async () => {
    const x = 'Hello World!';
    const y = '\n\n\n' + x + '\n\n';

    expect(removeNewLines(x)).toEqual(x);
    expect(removeNewLines(y)).toEqual(x);
  });

  it('trim', async () => {
    const x = 'Hello World!';
    const y = '     ' + x + '     \n';
    expect(trim(x)).toEqual(x);
    expect(trim(y)).toEqual(x);
  });

  it('trimHtmlTags', async () => {
    const x = 'ng-extensions';
    const y = '<span class="_50685029 truncate flex-auto" title="ng-extensions">' + x + '</span>';

    expect(trimHtmlTags(x)).toEqual(x);
    expect(trimHtmlTags(y)).toEqual(x);
  });

  it('wrap', async () => {
    const x = 'ng-extensions';

    expect(wrap(x, '')).toEqual(x);
    expect(wrap(x, '_|_')).toEqual('_|_' + x + '_|_');
  });

  it('split', async () => {
    const x = 'Hello World!';

    expect(split(x, ' ')).toEqual(['Hello', 'World!']);
    expect(split(x, '-')).toEqual(['Hello World!']);
  });

  it('capitalize', async () => {
    const x = 'Hello World!';
    const y = 'hEllO wOrlD!';

    expect(capitalize(x)).toEqual(x);
    expect(capitalize(y)).toEqual(x);
  });

  it('startsWith', async () => {
    const x = 'Hello World!';

    expect(startsWith(x, 'Hello')).toBeTrue();
    expect(startsWith(x, 'World')).toBeFalse();
  });

  it('endsWith', async () => {
    const x = 'Hello World!';

    expect(endsWith(x, 'World')).toBeFalse();
    expect(endsWith(x, 'World!')).toBeTrue();
    expect(endsWith(x, 'Hello')).toBeFalse();
  });

  it('contains', async () => {
    const x = 'Hello World!';

    expect(contains(x, 'Hello')).toBeTrue();
    expect(contains(x, 'World')).toBeTrue();
    expect(contains(x, 'Hey')).toBeFalse();
  });

  it('resolveTemplate', async () => {
    const s1 = 'Hello $!';
    const s2 = 'Hello $1!';
    const s3 = '$1 $2$3';
    const s4 = '$2 $3 $1';

    expect(resolveTemplate(s1, ['World'])).toEqual('Hello World!');
    expect(resolveTemplate(s2, ['World'])).toEqual('Hello World!');
    expect(resolveTemplate(s3, ['Hello', 'World', '!'])).toEqual('Hello World!');
    expect(resolveTemplate(s4, ['Hello', 'World', '!'])).toEqual('World ! Hello');
  });

  it('sum', async () => {
    const x = [1, 2, 3, 4];

    expect(sum(x)).toEqual(10);
  });

  it('average', async () => {
    const x = [1, 2, 3, 4];

    expect(average(x)).toEqual(2.5);
  });

  it('group', async () => {
    const x = [
      { fruit: 'apple', count: 10},
      { fruit: 'banana', count: 5},
      { fruit: 'kiwi', count: 30},
      { fruit: 'banana', count: 20}
    ];
    const y: Map<string, Array<any>> = new Map<string, Array<any>>();
    y.set('apple', [{ fruit: 'apple', count: 10}]);
    y.set('banana', [{ fruit: 'banana', count: 5}, { fruit: 'banana', count: 20}]);
    y.set('kiwi', [{ fruit: 'kiwi', count: 30}]);

    expect(group(x, 'fruit')).toEqual(y);
  });

});
