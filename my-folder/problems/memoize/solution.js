/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = (fn) => {
  const cache = new Map();
  let callCount = 0;

  const memoizedFn = (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);
      cache.set(key, result);
      callCount++;
      return result;
    }
  };

  memoizedFn.getCallCount = () => callCount;

  return memoizedFn;
};

// Define the functions: sum, factorial, and fib
const sum = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// Example usage:
const memoizedSum = memoize(sum);
const memoizedFactorial = memoize(factorial);
const memoizedFib = memoize(fib);

const executeActions = (fnName, actions, values) => {
  const fnMap = {
    sum: memoizedSum,
    factorial: memoizedFactorial,
    fib: memoizedFib,
  };

  const fn = fnMap[fnName];
  const results = [];

  actions.forEach((action, index) => {
    if (action === "call") {
      results.push(fn(...values[index]));
    } else if (action === "getCallCount") {
      results.push(fn.getCallCount());
    }
  });

  return results;
};



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */