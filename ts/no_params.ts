import _ from 'lodash-es';

const scores = [{ sub: '국어', score: 92 }, { sub: '영어', score: 88 }, { sub: '수학', score: 100 }];

const sum = (a, b) => {
    return a + b;
};

const over = _.curry((stand, score) => score > stand);

const get = (obj, key) => {
    return obj[key];
}

const getScore = _.partial(get, _, 'score');

let lens = 0;
const setLens = (nums) => {
    lens = nums.length;
}

const result = _.chain(scores)
    .map(getScore)
    .filter(over(90))
    .tap(setLens)
    .reduce(sum, 0)
    .value();

console.log(result , lens);
