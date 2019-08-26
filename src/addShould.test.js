
var add = require('./add.js');
var should = require('chai').should();

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    var total = add(1, 1);
    // 结果应该存在
    total.should.exist;
    // 结果应该等于2
    total.should.equal(2);
    // 结果应该不等于0
    total.should.not.equal(0);
    // 应该返回数字
    total.should.be.a('number');
  });
})