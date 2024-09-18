import _ from 'lodash-es';

// function 함수는 arguments를 사용할 수 있다.
// 화살표 함수는 arguments를 사용할 수 없다.
const pipeline = function(...args: any[]) {
    return _.partial(_.reduce as any, args, (l: any, r: (arg0: any) => any) => r(l));
}

type User = {
    name: string;
    age: number;
}
const users: User[] = [{ name: 'John', age: 25 }, { name: 'Lenny', age: 51 }, { name: 'Andrew', age: 43 }];

// const add2sub2 = pipeline(
//     (x: number) => x + 2,
//     (x: number) => x - 2
// )
// console.log(add2sub2(10));


// const rejectAge = (age: number) => {
//     return pipeline(
//         _.partial(_.reject as any, _, (user: User) => user.age < age),
//         _.partial(_.map as any, _, 'name')
//     )
// }
// console.log(rejectAge(50)(users));

const rejectAge = (age: number) => {
    return _.flow([
        _.partial(_.reject as any, _, (user: User) => user.age < age),
        _.partial(_.map as any, _, 'name')
    ])
}
console.log(rejectAge(50)(users));

// const test = _.partial(console.log, 2, _, 3);
// test(1);
//
// function add(a: number, b: number) {
//     return a + b;
// }
// const test2 = _.partial(add, 1);
// console.log(test2(6));
//
// const reject = _.partial(_.reject as any, _ as any, (user: User) => user.age < 50);
// console.log(reject(users));
