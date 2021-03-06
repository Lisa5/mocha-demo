
# modha-demo
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
$ node_modules/mocha/bin/mocha src/demo001 --require babel-core/register
```


注意：上面代码中，mocha命令使用了项目内安装的版本，而不是全局安装的版本。


## 五、异步测试
> Mocha默认每个测试用例最多执行2000毫秒，如果到时没有得到结果，就报错。对于涉及异步操作的测试用例，这个时间往往是不够的，需要用-t或--timeout参数指定超时门槛。

```

var expect = require('chai').expect;

it('测试应该4000毫秒后结束', function(done) {
  var x = true;
  
  setTimeout(function() {
    x = false;
    expect(x).to.be.not.ok;
    done(); // 通知Mocha测试结束
  }, 3000);
});

```

上面的测试脚本需要在3000毫秒后才运行，所以需要设置-t或者-timeout参数来改变默认时间限制（2000ms）。

```
$ mocha src/demo002 -t 4000
```

通过命令 -t 4000 设置超时时间为4000毫秒。


观察上面的测试脚本，不难发现多了done函数。
对于异步测试，在it块执行的时候，传入一个done参数，当测试结束的时候，必须显式调用这个函数，否则，Mocha就无法知道，测试是否结束，会一直等到超时报错。

但是，pormise除外，看下面这个例子: src/demo002/sync.test.js。

```

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


```

执行

```
$ mocha src/demo002/sync.test.js
```

Mocha内置对Promise的支持，允许直接返回Promise，等到它的状态改变，再执行断言，而不用显式调用done方法


## 六、浏览器测试
> Mocha 还支持在浏览器运行。

首先，mocha init 命令生成初始化文件
```
mocha init demo003
```

然后添加源码文件add.js

```

function add(a, b) {
  return a + b;
}

```

在自动生成的test.spec.js中写相应的测试脚本：

```

var should = chai.should();

describe('加法的测试：add 方法', function(){
  var total = add(1, 1);
  it('1加1应该等于2', function(){
    // 结果应该存在
    total.should.exist;
    // 结果应该等于2
    total.should.equal(2);
  });
  it('1加1应该不等于0', function(){
    // 结果应该不等于0
    total.should.not.equal(0);
  });
  it('结果应该返回数字', function(){
    // 应该返回数字
    total.should.be.a('number');
  });
})

```

最后在index.html中引入断言库chai.js，源码文件add.js以及测试脚本test.spec.js

```

<body>
  <div id="mocha"></div>
  <script src="mocha.js"></script>
  <script>mocha.setup('bdd');</script>
  <script src="http://chaijs.com/chai.js"></script>
  <script src="add.js"></script>
  <script src="tests.spec.js"></script>
  <script>
    mocha.run();
  </script>
</body>

```

浏览器打开index.html,可看到测试报告。

![Alt text](/image/浏览器测试报告.png)

## 七、 总结

本文为学习总结，欢迎大家批评指正~

[demo地址](https://github.com/Lisa5/mocha-demo.git)

