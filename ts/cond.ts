import _ from 'lodash-es';

// https://codingwithjs.rocks/blog/cond/
type User = {
    name: string;
    age: number;
    address: {
        main: string;
        detail: string;
    }
}

const users: User[] = [
    { name: 'John', age: 25, address: { main: 'GangDong', detail: 'abc apart 101'} },
    { name: 'Lenny', age: 51, address: { main: 'GangNam', detail: 'bbc apart 102'} },
    { name: 'Andrew', age: 43, address: { main: 'GangBuk', detail: 'cbc apart 103'} },
    { name: 'Peter', age: 55, address: { main: 'GangSeo', detail: 'dbc apart 104'} },
    { name: 'Tom', age: 60, address: { main: 'GangDong', detail: 'ebc apart 105'} },
    { name: 'Jerry', age: 49, address: { main: 'GangNam', detail: 'fbc apart 106'} },
];

const tmpl = (name: string) => ({ title: 'Mr.', name: name });

const getTemplate = _.cond([
        [_.matches({ name: 'John' }), () => tmpl('John')],
        [_.matches({ name: 'Lenny' }), () => tmpl('Lenny')],
        [_.matches({ name: 'Andrew' }), () => tmpl('Andrew')],
        [_.stubTrue, () => tmpl('Other')]
    ]); // { title: 'Mr.', name: 'John' }

console.log(getTemplate(users[0]));

const checkEvenOrOdd= _.cond([
    [(num: number) => num % 2 === 0, _.constant('even')],
    [(num: number) => num % 2 !== 0, _.constant('odd')]
])

const result = _.map(
    _.range(20),
    (num: number) => ({ num, type: checkEvenOrOdd(num) })
);

console.log(result);
