# mocha-demo

## 简单的单元测试
>加法测试：src/add.js


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

### should断言
>src/addShould.test.js

### expect断言
>src/addExpect.test.js

## mocha的基本用法
>mocha 的基本用法包括命令的使用和目录的查找关系

可在当前目录使用 mocha 命令执行脚本，该命令会默认去找改目录下的test文件活文件夹。
如果找不到火抛出错误“Error: No test files found: "test"”。

注意：Mocha 默认只执行 test 子目录下面第一层的测试用例，不会执行更下层的用例。为了改变这种行为，就必须加上-- recursive 参数，这时 test 子目录下面所有的测试用例----不管在哪一层----都会执行。






