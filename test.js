var cassert = require('./index')
var assert = cassert.default
var equal = cassert.equal
var notEqual = cassert.notEqual
var strictEqual = cassert.strictEqual
var notStrictEqual = cassert.notStrictEqual
var deepEqual = cassert.deepEqual
var notDeepEqual = cassert.notDeepEqual

assert(1 == 1, '1 == 1')
assert(1 == 2, '1 == 2')
equal(1, 1, '1 = 1')
equal(1, 2)
notEqual(1, 1)
notEqual(1, 2)
strictEqual(1, 1)
strictEqual({}, {})
// strictEqual({}, {}, '', true)
notStrictEqual(1, 1)
notStrictEqual({}, {})
deepEqual(1, 1)
deepEqual({ a: [1,2,3,4] }, { a: [1,2,3,4] }, '对象1 = 对象2')
notDeepEqual({ a: [1,2,3,4] }, { a: [1,2,3] }, '对象1 != 对象2')


