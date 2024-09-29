import _ from 'lodash-es';

const ids = [1, 2, 3, 4];
const names = ['carA', 'carB', 'carC', 'carD'];
const likes = [20, 30, 10, 22];

const sortByLast = _.partial(_.sortBy as any, _, [_.last]);

const mapByNth = (index: number) => _.partial(_.map as any, _, _.partial(_.nth, _, index))

const popularCarName = _.flow([
    _.zip,
    sortByLast,
    _.reverse,
    mapByNth(1),
    _.head,
])

console.log(popularCarName(ids, names, likes))

