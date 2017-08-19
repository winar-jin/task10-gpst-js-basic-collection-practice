'use strict';
const helper = require('../helper/helper');

function find(collection, ch) {
  return collection.find(ele => ele.name === ch) || null;
}

function summarize(collection) {
  let result = [];
  collection.forEach(item => {
    let obj = find(result, item);
    if (obj) {
      obj.summary++;
    } else {
      result.push({name: item, summary: 1});
    }
  });
  return result;
}

module.exports = function countSameElements(collection) {
  let expandedArray = helper.expand(collection);
  return summarize(expandedArray);
};
