# mocha-demo
旨在学习mocha，自己上手写测试用例，并记录总结学习成果。


## 简单的单元测试
>加法测试：src/add.js
```
function add(a, b) {
  return a + b;
}

module.exports = add;
```
```
var add = require('./add.js');
var assert = require('chai').assert;

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    var total = add(1, 1);
    // 1+1应该等于2
    assert.equal(total, 2);
    // 应该返回一个数字
    assert.typeOf(total, 'number');
  });
})
```

## 断言库的用法
>所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。


### 断言库chai
>mocha 本身没有断言库方法，所以需要另外安装断言库。

安装本地断言库 chai

```
npm i chai
```

### assert断言
>src/addAssert.test.js

```
var add = require('./add.js');
var assert = require('chai').assert;

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    var total = add(1, 1);
    // 1+1应该等于2
    assert.equal(total, 2);
    // 应该返回一个数字
    assert.typeOf(total, 'number');
  });
})
```


### should断言
>src/addShould.test.js

```
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
```



### expect断言
>src/addExpect.test.js

```
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法的测试：add 方法', function(){
  it('1加1应该等于2', function(){
    var total = add(1, 1);
    // 结果应该等于2
    expect(total).equal(2);
  });
})
```


## mocha的基本用法
>mocha 的基本用法包括命令的使用和目录的查找关系

可在当前目录使用 mocha 命令执行脚本，该命令会默认去找改目录下的test文件活文件夹。
如果找不到会抛出错误“Error: No test files found: "test"”。

### 使用 recursive 参数
Mocha 默认只执行 test 子目录下面第一层的测试用例，不会执行更下层的用例。
为了改变这种行为，就必须加上-- recursive 参数，这时 test 子目录下面所有层级的测试用例都会执行。

同理，如果执行： Mocha **文件夹，同样只会执行该文件夹下的第一层测试用例，执行左右层级需加上 recursive 参数。

### 使用通配符
>命令行指定测试脚本时，可以使用通配符，同时指定多个文件。

```
$ mocha spec/{my,awesome}.js
$ mocha test/unit/*.js
```

###  生成报告 
>mocha 支持生成多种测试报告格式，方便统计测试报告运行状况。

1. --reporter 参数用来指定测试报告的格式，默认是spec格式。

2. 使用 mochawesome 模块，可以生成漂亮的HTML格式的报告。

安装和使用

```
$ npm install --save-dev mochawesome
$ ../node_modules/.bin/mocha --reporter mochawesome
```

注意：上面代码中，mocha命令使用了项目内安装的版本，而不是全局安装的版本，因为mochawesome模块是安装在项目内的。

测试报告在目录mochawesome-reports下。

![Alt text](/image/mochawesome测试报告.png)

3. 其它方式










