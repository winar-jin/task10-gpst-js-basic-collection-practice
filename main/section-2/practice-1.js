'use strict';
module.exports = function countSameElements(collection) {
  return collection.reduce((result, item) => {
    let obj = result.find(obj => obj.key === item);
    if (!!obj) {
      obj.count++;
    } else {
      result.push({key: item, count: 1})
    }
    return result;
  }, []);
};
