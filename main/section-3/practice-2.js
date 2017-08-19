'use strict';
const helper = require('../helper/helper');

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result = [];
  collectionA.forEach(item => {
    let key = item.key;
    let count = item.count;
    if (helper.includes(objectB.value, key)) {
      count = count - Math.floor(count / 3);
    }
    result.push({key, count});
  });
  return result;
};
