'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(ele => collectionB.includes(ele));
};
