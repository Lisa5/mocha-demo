
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    var total = add(1, 1);
    // 结果应该等于2
    expect(total).equal(2);
  });
})