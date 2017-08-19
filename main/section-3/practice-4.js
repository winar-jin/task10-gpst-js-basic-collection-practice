'use strict';

const helper = require('../helper/helper');

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let expandedArray = helper.expand(collectionA);
  let summarizedArray = helper.summarize(expandedArray);
  return helper.discount(summarizedArray, objectB.value);
};
