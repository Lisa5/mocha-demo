describe("Demo2", function(){
  describe("方法 1", function(){
      context("情境 1", function(){
          before(function(){
              console.log("-----测试之前------");
          });
          after(function(){
              console.log("-----测试之后------");
          });
          beforeEach(function(){
              console.log("-------每条测试之前---------");
          })
          afterEach(function(){
              console.log("-------每条测试之后---------");
          })
          it("测试 1", function(){
            console.log("-------it 1---------");
          })
          it("测试 2", function(){
            console.log("-------it 2---------");
          })
      })
  })
})

/***
 * 测试脚本，可独立执行
 * 测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。
 * 
 * 
 * 
 */