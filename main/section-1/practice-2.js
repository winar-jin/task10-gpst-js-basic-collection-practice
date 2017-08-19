'use strict';

const helper = require('../helper/helper');

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionA.forEach(ele => {
    if (helper.includes(collectionB[0], ele)) {
      result.push(ele);
    }
  });
  return result;
};
