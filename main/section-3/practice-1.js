'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(item => {
    let key = item.key;
    let count = item.count;
    if (objectB.value.includes(key)) {
      count--;
    }
    return {key, count};
  });
};
