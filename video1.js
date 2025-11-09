// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

const dataCache = new Map();

const exepensiveTask = (id) => {
  console.log(`Run the expensive task for ${id}`);

  return {
    id,
    data: `some data for id: ${id}`,
    timeStamp: new Date().getTime(),
  };
};

const getDate = (id) => {
  if (dataCache.has(id)) {
    console.log("Cache HIT for id:", id);
    return dataCache.get(id);
  }
  console.log("Cache MISS for id:", id);

  const data = exepensiveTask(id);

  dataCache.set(id, data);

  return data;
};

console.log(getDate(123));
console.log(getDate(123));
console.log(dataCache);
