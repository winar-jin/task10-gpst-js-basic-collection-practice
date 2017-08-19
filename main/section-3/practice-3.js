'use strict';

const helper = require('../helper/helper');

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let summarized = helper.summarize(collectionA);
  return helper.discount(summarized, objectB.value);
}
