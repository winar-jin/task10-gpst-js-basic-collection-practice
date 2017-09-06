'use strict';
const helper = require('../helper/helper');

function summarize(collection) {
  return collection.reduce((result, item) => {
    const obj = result.find(o => o.name === item);
    if (!!obj) {
      obj.summary++;
    } else {
      result.push({name: item, summary: 1});
    }
    return result;
  }, [])
}

module.exports = function countSameElements(collection) {
  let expandedArray = helper.expand(collection);
  return summarize(expandedArray);
};
