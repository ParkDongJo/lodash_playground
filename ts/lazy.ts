import _ from 'lodash-es';

type User = {
    name: string;
    age: number;
}
const users: User[] = [
    { name: 'John', age: 25 },
    { name: 'Lenny', age: 51 },
    { name: 'Andrew', age: 43 },
    { name: 'Peter', age: 55 },
    { name: 'Tom', age: 60 },
    { name: 'Jerry', age: 49 },
];

const getOldMans = (n: number) => {
    return _.chain(users)
        .map((user: User) => ({...user, age: user.age + 1}))
        .filter((user: User) => user.age >= 50)
        .map((user: User) => user.name)
        .take(n)
        .value()
}

getOldMans(2).forEach((name: string) => console.log(name)); // Lenny
