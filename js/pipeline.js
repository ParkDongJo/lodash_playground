import _ from 'lodash-es';
const log = console.log;

// function 함수는 arguments를 사용할 수 있다.
// 화살표 함수는 arguments를 사용할 수 없다.
const pipeline = function() {
    return _.partial(_.reduce, arguments, (l, r) => r(l));
}

const users = [{ name: 'John', age: 25 }, { name: 'Lenny', age: 51 }, { name: 'Andrew', age: 43 }];

const add2sub2 = pipeline(
    (x) => x + 2,
    (x) => x - 2
)
log(add2sub2(10));

const rejectAge = (age) => pipeline(
    _.partial(_.reject, _, (user) => user.age < age),
    _.partial(_.map, _, 'name')
)
log(rejectAge(50)(users));
