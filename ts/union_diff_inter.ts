// https://velog.io/@nekonitrate/1%EC%9D%BC-3-Lodash-%EA%B3%B5%EB%B6%80%EB%B0%A9-difference-differenceBy-differenceWith
import _ from 'lodash-es';

type Member = {
    name: string;
    age: number;
}
// A
const groups: Member[] = [
    { name: 'John', age: 25 },
    { name: 'Lenny', age: 24 },
    { name: 'Andrew', age: 20 },
    { name: 'Peter', age: 21 },
    { name: 'Tom', age: 28 },
    { name: 'Jerry', age: 27 },
];
// B
const groups2: Member[] = [
    { name: 'John', age: 25 },
    { name: 'Han', age: 24 },
    { name: 'Andrew', age: 20 },
    { name: 'Peter', age: 21 },
    { name: 'Penny', age: 20 },
    { name: 'Kay', age: 27 },
];


// 차집합
// A - B
console.log(_.differenceBy(groups, groups2, 'name'));
/*
[
  { name: 'Lenny', age: 24 },
  { name: 'Tom', age: 28 },
  { name: 'Jerry', age: 27 }
]
 */

// B - A
console.log(_.differenceBy(groups2, groups, 'name'));
/*
[
  { name: 'Han', age: 24 },
  { name: 'Penny', age: 20 },
  { name: 'Kay', age: 27 }
]
 */

// 교집합
// A ⋂ B
console.log(_.intersectionBy(groups, groups2, 'name'));
/*
[
  { name: 'John', age: 25 },
  { name: 'Andrew', age: 20 },
  { name: 'Peter', age: 21 }
]
 */

// 합집합
// A ⋃ B
console.log(_.concat(
    _.differenceBy(groups, groups2, 'name'),
    _.differenceBy(groups2, groups, 'name')
));
/*
[
  { name: 'Lenny', age: 24 },
  { name: 'Tom', age: 28 },
  { name: 'Jerry', age: 27 },
  { name: 'Han', age: 24 },
  { name: 'Penny', age: 20 },
  { name: 'Kay', age: 27 }
]
 */


// 여집합
// A^⊂
const all = _.concat(
    _.differenceBy(groups, groups2, 'name'),
    _.differenceBy(groups2, groups, 'name'),
    [{ name: 'Ben', age: 25 }]
)
console.log(_.differenceBy(all, groups, 'name'))
/*
[
  { name: 'Han', age: 24 },
  { name: 'Penny', age: 20 },
  { name: 'Kay', age: 27 },
  { name: 'Ben', age: 25 }
]
 */
