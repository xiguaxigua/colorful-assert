import isEqual from 'lodash/isEqual'

function sucLog (msg) {
  console.log("\x1b[32m ✓ %s \x1b[0m", msg)
}

function errLog (msg) {
  console.log("\x1b[31m ✖ %s \x1b[0m", msg)
}

export default function assert (value, msg, breakProcess) {
  const log = msg || `${value} should be true`
  if (value) {
    sucLog(log)
  } else {
    errLog(log)
    if (breakProcess) process.exit(1)
  }
}
// ==
export function equal (actual, expected, msg, breakProcess) {
  const log = msg || `${actual} should to be equal to ${expected}`
  const value = actual == expected
  assert(value, log, breakProcess)
}
// !=
export function notEqual (actual, expected, msg, breakProcess) {
  const log = msg || `${actual} should to be not equal to ${expected}`
  const value = actual != expected
  assert(value, log, breakProcess)
}
// ===
export function strictEqual (actual, expected, msg, breakProcess) {
  const log = msg || `${actual} should to be strict equal to ${expected}`
  const value = actual === expected
  assert(value, log, breakProcess)
}
// !==
export function notStrictEqual (actual, expected, msg, breakProcess) {
  const log = msg || `${actual} should to be not strict equal to ${expected}`
  const value = actual !== expected
  assert(value, log, breakProcess)
}
// [{ a: 1 }] == [{ a: 1 }]
export function deepEqual (actual, expected, msg, breakProcess) {
  const log = msg || `${actual} should to be deep equal to ${expected}`
  const value = isEqual(actual, expected)
  assert(value, log, breakProcess)
}
// [{ a: 1 }] != [{ a: 1 }]
export function notDeepEqual (actual, expected, msg, breakProcess) {
  const log = msg || `${actual} should to be not deep equal to ${expected}`
  const value = !isEqual(actual, expected)
  assert(value, msg, breakProcess)
}
