const curry = (fn) => function curried(...args) {
  return fn.length > args.length
    ? (...newArgs) => curried(...args.concat(newArgs))
    : fn(...args); //curried and curriedN should be named different because arrow function uses the caller context. In this case, the caller is the script
};

const curryN = (fn, n) => function curriedN(...args) {
  return n > args.length
  ? (...newArgs) => curriedN(...args.concat(newArgs))
  : fn(...args); //curried and curriedN should be named different because arrow function uses the caller context. In this case, the caller is the script
};

const partial = (fn, ...partialArgs) => {
  return function partialized(...completeArgs) {
    const args = partialArgs.map(arg => arg === undefined ? completeArgs.shift() : arg);
    return fn(...args);
  }
};

const multiply = (a, b) => a * b;
const infiniteSum = (...args) => args.reduce((acc, num) => acc + num, 0);
const resultLabel = (label, something, end) => `${label} ${something} ${end}`;

const cmultiply = curry(multiply);
const csum = curryN(infiniteSum, 10);
const partialLabel = curryN(partial(resultLabel, 'Result:', undefined, undefined), 2);

const res = csum(1)(2)(3)(4)(39)(21)(1)(1)(12)(10);

console.log(partialLabel(cmultiply(1)(2))('end'));
console.log(partialLabel(res)('end'));
