
var expect = require('chai').expect;
global.fetch = require('node-fetch'); // Jest UT是在Node下进行的测试，默认是没有导入fetch,需要手动引入

it('异步请求应该返回一个对象', function() {
  return fetch('https://api.github.com')
    .then(function(res) {
      return res.json();
    }).then(function(json) {
      expect(json).to.be.an('object');
    });
});
