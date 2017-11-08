import isEqual from 'lodash/isEqual';

function sucLog(msg) {
  console.log("\x1b[32m ✓ %s \x1b[0m", msg);
}

function errLog(msg) {
  console.log("\x1b[31m ✖ %s \x1b[0m", msg);
}

function assert(value, msg, breakProcess) {
  var log = msg || `${value} should be true`;
  if (value) {
    sucLog(log);
  } else {
    errLog(log);
    if (breakProcess) process.exit(1);
  }
}
// ==
function equal(actual, expected, msg, breakProcess) {
  var log = msg || `${actual} should to be equal to ${expected}`;
  var value = actual == expected;
  assert(value, log, breakProcess);
}
// !=
function notEqual(actual, expected, msg, breakProcess) {
  var log = msg || `${actual} should to be not equal to ${expected}`;
  var value = actual != expected;
  assert(value, log, breakProcess);
}
// ===
function strictEqual(actual, expected, msg, breakProcess) {
  var log = msg || `${actual} should to be strict equal to ${expected}`;
  var value = actual === expected;
  assert(value, log, breakProcess);
}
// !==
function notStrictEqual(actual, expected, msg, breakProcess) {
  var log = msg || `${actual} should to be not strict equal to ${expected}`;
  var value = actual !== expected;
  assert(value, log, breakProcess);
}
// [{ a: 1 }] == [{ a: 1 }]
function deepEqual(actual, expected, msg, breakProcess) {
  var log = msg || `${actual} should to be deep equal to ${expected}`;
  var value = isEqual(actual, expected);
  assert(value, log, breakProcess);
}
// [{ a: 1 }] != [{ a: 1 }]
function notDeepEqual(actual, expected, msg, breakProcess) {
  var value = !isEqual(actual, expected);
  assert(value, msg, breakProcess);
}

export { equal, notEqual, strictEqual, notStrictEqual, deepEqual, notDeepEqual };
export default assert;
