import _ from 'lodash-es';

type Data = {
    id: number;
    name: string;
    age: number;
};
const data = [
    { id: 1, name: 'apple', age: 25 },
    { id: 2, name: 'banana', age: 51 },
    { id: 3, name: 'desc 3', age: 43 }];
const checked = [false, false, false];

const displayDatas = _.zip(data, checked) as [Data, boolean][];

console.log(displayDatas);

displayDatas[2][1] = true;

const result = _.chain(displayDatas)
    .filter((data) => data[1])
    .map((data) => data[0])
    .value();

console.log(result); // [ { id: 3, name: 'desc 3', age: 43 } ]
