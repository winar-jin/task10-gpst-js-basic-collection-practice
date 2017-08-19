'use strict';

const helper = require('../helper/helper');

module.exports = function countSameElements(collection) {
  let result = [];
  collection.forEach(ele => {
    let obj = helper.findInObj(result, ele);
    obj && obj.count++ || result.push({key: ele, count: 1});
  });

  return result;
};
