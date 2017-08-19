function includes(collection, ch) {
  return collection.some(ele => ele === ch);
}

function findInObj(collection, ch) {
  return collection.find(ele => ele.key === ch) || null;
}

function summarize(collection) {
  let result = [];
  collection.forEach(ele => {
    let obj = findInObj(result, ele);
    obj && obj.count++ || result.push({key: ele, count: 1});
  });
  return result;
}

function split(item) {
  let array = /(\w+)[-|[|:](\d+)]?/g.exec(item);
  return {key: array[1], count: parseInt(array[2], 10)};
}

function push(result, key, count) {
  for (let i = 0; i < count; i++) {
    result.push(key);
  }
}

function expand(collection) {
  let result = [];
  collection.forEach(item => {
    if (item.length === 1) {
      result.push(item);
    } else {
      let {key, count} = split(item);
      push(result, key, count);
    }
  });
  return result;
}

function discount(collection, promotionItems) {
  let result = [];
  collection.forEach(item => {
    let key = item.key;
    let count = item.count;
    if (includes(promotionItems, key)) {
      count = count - Math.floor(count / 3);
    }
    result.push({key, count});
  });
  return result;
}


// Map function by myself
function map(collection, fn) {
  let result = [];
  collection.forEach((item, index) => {
    result.push(fn.apply(null, [item, index]));
  });
  return result;
}

// Reduce function by myself
function reduce(collection, fn, defaultVal) {
  let result = defaultVal || null;
  collection.forEach(ele => {
    result = fn.apply(null, [result, ele]);
  });
  return result;
}

module.exports = {
  includes,
  findInObj,
  summarize,
  split,
  push,
  expand,
  discount,
  map,
  reduce
};