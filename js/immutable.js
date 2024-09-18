import _ from 'lodash-es';
const log = console.log;

const users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
];

const user1 = _.sortBy(users, ['user', 'age']);
log(user1);

// _.sortBy(users, ['user', 'age']) 직접 구현한다고 했을 시
const user2 = [...users].sort((a, b) => {
    if (a.user < b.user) return -1;
    if (a.user > b.user) return 1;
    if (a.age < b.age) return -1;
    if (a.age > b.age) return 1;
    return 0;
});
log(user2);


// _.without(array, [values])
const nums = [2, 1, 2, 3];
const excluded = _.without(nums, 1, 2);
log(excluded);

// without 은 리터럴 값을 취급하는 배열에만 활용된다.
// 아래와 같이 객체를 취급하는 배열에는 사용이 불가능하다.
const objs = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
const excluded2 = _.without(objs, { 'x': 1, 'y': 2 });
log(excluded2);

// _.reject(array, [predicate=_.identity])
// 이런 경우 reject 가 유용하다.
const excluded3 = _.reject(objs, { 'x': 1, 'y': 2 });
log(excluded3);


// _.split(string, separator, limit)
// string 문자열에 대해서만 유용하다
const splited1 = _.split(nums, ',', 2);
log(splited1);

const splited2 = _.split('a-b-c', '-', 2);
log(splited2)


// _.slice(array, [start=0], [end=array.length])
// array 배열에 대해서만 유용하다
const sliced = _.slice(nums, 1, 3);
log(sliced);

const sliced2 = _.slice(objs, 1, 3);
log(sliced2);

const objs2 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': 2, 'y': 3 }];
const sliced3 = _.slice(objs2, 1, 4);
const sliced3_2 = _.slice(objs2, 1);
log(sliced3);

// _.slice를 직접 구현한다고 했을 시
// 이때도 불변성은 지켜진다.
// 오히려 이때는 내장함수가 편해보니다.
// 다만 함수 조합일때는 _.slice가 더 편리하다.
const sliced4 = objs2.slice(1, 4);
log(sliced4);
log(objs2 === sliced4);


// _.assignin(object, [sources])
// _.extend가 버전업이 되면서, _.assignin으로 변경되었다.
const object = { 'a': 1 };
const other = { 'b': 2 };
const other2 = { 'c': 3, 'x': { 'z': 1 }};
const other3 = { 'd': 4 };
const other4 = { 'e': 5 };

const assigned = _.assignIn(object, other, other3);
log(assigned);
log(object === assigned);

const assinged2 = _.assignIn({}, other, other2);
log(assinged2);

log('defaults-----------------');
log(_.defaults({}, other2, { 'x': { 'z': 1, 'g': { 'h': 11 } } }));

const other5 = { 'x': { 'z': 1, 'g': { 'h': 11 } } };
const newDefaults = _.defaultsDeep({}, other2, other5);
log(newDefaults);

other5.x.g = { 'h': 22 };

log(newDefaults);
