'use strict';
const createUpdatedCollection = require('../../main/section-3/practice-4');

const helper = require('../../main/helper/helper');

describe('practice-3-4', () => {

  const collectionA = [
    'a', 'a', 'a',
    'e', 'e', 'e', 'e', 'e', 'e', 'e',
    'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    'g', 'g', 'g', 'g', 'g', 'g', 'g',
    'b', 'b', 'b', 'b', 'b', 'b',
    'd-5'
  ];


  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('统计出A集合中相同的元素的个数，有过有-就把-右边的数字也计算入个数，形成C集合，C集合中的元素要形如{key:"a", count: 3}，然后选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count，满3减1，输出减过之后的新C集合', () => {

    const result = createUpdatedCollection(collectionA, objectB);

    expect(result).toEqual([
      {key: 'a', count: 2},
      {key: 'e', count: 5},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 6},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 4}
    ]);
  });
});

describe('helper', () => {
  it('owner map function ', () => {
    let origin = [1, 2, 3, 4];
    let result = helper.map(origin, (item, index) => item * index);
    expect(result).toEqual([0, 2, 6, 12]);
  });

  it('owner reduce function', () => {
    let origin = [1, 2, 3, 4];
    let result = helper.reduce(origin, (total, item) => total + item, 0);
    expect(result).toEqual(10);
  })
});
