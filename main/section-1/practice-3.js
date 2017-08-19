'use strict';
const helper = require('../helper/helper');

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(ele => {
    if (helper.includes(objectB.value, ele)) {
      result.push(ele);
    }
  });
  return result;
};
