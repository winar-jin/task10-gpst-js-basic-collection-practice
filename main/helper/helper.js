function summarize(collection) {
  return collection.reduce((result, item) => {
    const value = result.find(o => o.key === item);
    if (!!value) {
      value.count++;
    } else {
      result.push({key: item, count: 1});
    }
    return result;
  }, [])
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
  return collection.reduce((result, item) => {
    if (item.length === 1) {
      result.push(item);
    } else {
      let {key, count} = split(item);
      push(result, key, count);
    }
    return result;
  }, []);
}

function discount(collection, promotionItems) {
  return collection.map(item => {
    let key = item.key;
    let count = item.count;
    if (promotionItems.includes(key)) {
      count -= Math.floor(count / 3);
    }
    return {key, count};
  });
}


// Map function by myself
function map(collection, fn) {
  return collection.reduce((result, item, index) => {
    result.push(fn.apply(null, [item, index]));
    return result;
  }, []);
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
  summarize,
  push,
  expand,
  discount,
  map,
  reduce
};