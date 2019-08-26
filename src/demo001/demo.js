
import add from '../add.js';
import chai from 'chai';

let assert = chai.assert;

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    let total = add(1, 1);
    // 1+1应该等于2
    assert.equal(total, 2);
    // 应该返回一个数字
    assert.typeOf(total, 'number');
  });
})