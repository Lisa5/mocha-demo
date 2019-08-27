
var expect = require('chai').expect;

it('测试应该4000毫秒后结束', function(done) {
  var x = true;
  
  setTimeout(function() {
    x = false;
    expect(x).to.be.not.ok;
    done(); // 通知Mocha测试结束
  }, 3000);
});