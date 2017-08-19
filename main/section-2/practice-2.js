'use strict';

const helper = require('../helper/helper');

module.exports = function countSameElements(collection) {
  let expandedArray = helper.expand(collection);
  return helper.summarize(expandedArray);
};
