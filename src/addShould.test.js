
var add = require('./add.js');
var should = require('chai').should();

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    var total = add(1, 1);
    total.should.exist;
    total.should.equal(2);
    total.should.not.equal(0);
    total.should.be.a('number');
  });
})