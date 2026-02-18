const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) callback(arr[i], i);
};

const myMap = (arr, callback) => {
  const result = [];
  for (let item of arr) result.push(callback(item));
  return result;
};

const myFilter = (arr, callback) => {
  const result = [];
  for (let item of arr) if (callback(item)) result.push(item);
  return result;
};

const myReduce = (arr, callback, initial) => {
  let accumulator = initial;
  for (let item of arr) accumulator = callback(accumulator, item);
  return accumulator;
};

module.exports = { myForEach, myMap, myFilter, myReduce };