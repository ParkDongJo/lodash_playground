// 비동기 Promise 를 lodash 를 사용하여 처리하는 방법을 알아보자.
import _ from 'lodash-es';

const func1 = (value: string) => {
    return `func1 -> ${value}`
}
const func2 = (value: string) => {
    return `func2 -> ${value}`
}
const func3 = (value: string) => {
    return `func3 -> ${value}`
}

const result = _.flow([
    func1,
    func2,
    func3,
])('Hello');

console.log(result);


const asyncFunc1 = (value: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func1 -> ${value}`);
        }, 500);
    });
}
const asyncFunc2 = (value: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 -> ${value}`);
        }, 500);
    });
}
const asyncFunc3 = (value: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 -> ${value}`);
        }, 500);
    });
}

const print = <T>(str: Promise<T> | T) => {
    str instanceof Promise ? str.then(console.log) : console.log(str);
}

const asyncFlowVer1 = <T>(...funcs: ((input: T) => Promise<T>)[]) => {
    return (input: T) => {
        return funcs.reduce<Promise<T>>((acc, func) => {
            return acc.then(func);
        }, Promise.resolve(input));
    };
}

const asyncFlowVer2 = <T>(...funcs: ((input: T) => (Promise<T> | T))[]) => {
    return (input: T) => {
        return funcs.reduce<Promise<T> | T>((acc, func) => {
            return acc instanceof Promise ? acc.then(func) : func(acc);
        }, Promise.resolve(input));
    };
}

asyncFlowVer1(asyncFunc1, asyncFunc2, asyncFunc3)('Hello').then(console.log);

print(asyncFlowVer2(asyncFunc1, asyncFunc2, func3)('Hello'));
