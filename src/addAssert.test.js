
var add = require('./add.js');
var assert = require('chai').assert;

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    var total = add(1, 1);
    assert.equal(total, 2);
    assert.typeOf(total, 'number');
  });
})