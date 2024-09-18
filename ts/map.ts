import _ from 'lodash-es';

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

const addrMains = _.map(users, _.property('address.main'))
console.log(addrMains);


const datas = {
    productId: 1,
    productName: 'apple',
    detail: {
        price: 1000,
        description: 'apple is good',
        manufacturer: {
            name: 'Apple',
            location: 'USA'
        }
    },
    agreements: [
        { id: 1, name: 'agreement 1', price: 1000},
        { id: 2, name: 'agreement 2', price: 1000 },
        { id: 3, name: 'agreement 3', price: 1200 }
    ],
}

console.log(_.map(datas, _.property('detail.price'))) // [1000]
console.log(_.propertyOf(datas)('agreements'))
console.log(_.map(['agreements.[0].id', 'agreements[0].name'], _.propertyOf(datas)))

const getAgreement = () => {
    return _.propertyOf(datas)('agreements')
        .filter((agreement: any) => agreement.price > 1000)
        .map((agreement: any) => ({...agreement, price: agreement.price + 100}))
}
const getAgreementByOnlyLodash = (cond: Function) => {
    return _.flow([
        _.propertyOf(datas),
        _.partial(_.filter as any, _, cond),
        _.partial(_.map as any, _, (agreement: any) => ({...agreement, price: agreement.price + 100}))
    ])('agreements')
}
console.log(getAgreement()) // [ { id: 3, name: 'agreement 3', price: 1300 } ]
console.log(getAgreementByOnlyLodash((agreement: any) => agreement.price > 1000)) // [ { id: 3, name: 'agreement 3', price: 1300 } ]
