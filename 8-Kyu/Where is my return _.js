/*
Description:
The purpose of this kata is to demonstrate a very basic mistake you may do in Javascript.
Some may say it is quirk but there is an explaination about it.
Fix the bug and you will see the explaination.

The function bug() is supposed to return a value, but it does not work as expected.
Your job is to fix it and make sure the proper value is returned.

Good luck
*/
function bug() {
  return ({
    foo: true
  })
}

const chai = require('chai');
const assert = chai.assert;
const bug = require('./your-file'); // Replace 'your-file' with the actual file path containing the bug() function

describe('bug()', () => {
  it('should return an object with foo set to true', () => {
    const result = bug();
    assert.isObject(result, 'Result should be an object');
    assert.propertyVal(result, 'foo', true, 'foo property should be true');
  });
});
