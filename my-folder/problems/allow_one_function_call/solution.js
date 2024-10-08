/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (called) return undefined;
    called = true;
    result = fn(...args);
    return result;
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
