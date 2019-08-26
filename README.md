# mocha-demo
旨在学习mocha，自己上手写测试用例，并记录总结学习成果。[demo地址](https://github.com/Lisa5/mocha-demo.git)

Mocha（发音“摩卡”），诞生于2011年，是现在最流行的JS测试框架之一，在浏览器和node环境都可以使用。

单元测试可帮助我们提高代码质量，减少bug。

本文默认已经安装全局mocha。

若没有安装：
```
$ npm install -global mocha
```

## 一、简单的单元测试
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

## 二、断言库的用法
>所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。


### 1. 断言库chai
>mocha 本身没有断言库方法，所以需要另外安装断言库。

安装本地断言库 chai

```
npm i chai
```

### 2. assert 断言
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


### 3. should 断言
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

### 4. expect 断言
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


## 三、mocha 的基本用法
>mocha 的基本用法包括命令的使用和目录的查找关系

可在当前目录使用 mocha 命令执行脚本，该命令会默认去找改目录下的test文件活文件夹。
如果找不到会抛出错误“Error: No test files found: "test"”。

### 1. 使用 recursive 参数
Mocha 默认只执行 test 子目录下面第一层的测试用例，不会执行更下层的用例。
为了改变这种行为，就必须加上-- recursive 参数，这时 test 子目录下面所有层级的测试用例都会执行。

同理，如果执行： Mocha **文件夹，同样只会执行该文件夹下的第一层测试用例，执行左右层级需加上 recursive 参数。

### 2. 使用通配符
>命令行指定测试脚本时，可以使用通配符，同时指定多个文件。

```
$ mocha spec/{my,awesome}.js
$ mocha test/unit/*.js
```

###  3. 生成报告 
>mocha 支持生成多种测试报告格式，方便统计测试报告运行状况。

1). --reporter 参数用来指定测试报告的格式，默认是spec格式。

2). 使用 mochawesome 模块，可以生成漂亮的HTML格式的报告。

安装和使用

```
$ npm install --save-dev mochawesome
$ node_modules/.bin/mocha --reporter mochawesome
```

注意：上面代码中，mocha命令使用了项目内安装的版本，而不是全局安装的版本，因为mochawesome模块是安装在项目内的。

测试报告在目录mochawesome-reports下。

![Alt text](/image/mochawesome测试报告.png)


## 四、ES6测试
> ES6测试脚本，需要先用Babel转码

如下es6测试脚本：

```
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
```

安装babel

```
$ npm install babel-core babel-preset-es2015 --save-dev
```

根目录下新建.babelrc配置文件

```
{
  "presets": [ "es2015" ]
}
```

执行es6脚本：
* src/demo001 为我的测试脚本文件夹
* 使用 --require 指定测试脚本的转码器。babel6为： babel-core/register

```
node_modules/mocha/bin/mocha src/demo001 --require babel-core/register
```


## 五、异步测试
未完待续......


## 六、 总结

本文为学习总结，欢迎大家批评指正~

[demo地址](https://github.com/Lisa5/mocha-demo.git)









