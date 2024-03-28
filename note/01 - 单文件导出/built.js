/**
 * 01 打包后的文件就是一个 "自调用函数"
 * 02 内部的 __webpack_modules__ 称之称为是模块定义，它就是一个键值对
 * 03 这个键名就是当前被加载模块的文件名与某个目录的拼接（）
 * 04 这个键值就是一个函数，
 * 05 这个函数在将来某个时间点上会被调用，同时会接收到一定的参数，利用这些参数就可以实现模块的加载操作
 * 06 针对于上述的代码就相当于是将 {}（模块定义） 传递给了 modules
 */

(() => {
  // ，：
  /**
   * webpack自己的"模块"，处理 require、import 等模块化加载方式
   * 1、以键值对的形式存在，模块路径为key，文件内容为value
   * 2、和 node.js 里的模块加载有一些类似，会将被加载模块中的内容包裹于一个函数中
   */
  var __webpack_modules__ = {
    "./src/index.js": (module) => {
      // 内部使用 eval 函数执行
      eval(
        "console.log('index.js内容')\r\n\r\nmodule.exports = '入口文件导出内容'\r\n\n\n//# sourceURL=webpack://webpack-mini/./src/index.js?"
      );
    },
  };

  // 用于缓存被加载过的模块
  var __webpack_module_cache__ = {};

  // webpack 当中自定义的，它的核心作用就是返回模块的 exports
  function __webpack_require__(moduleId) {
    // 先从缓存中获取 moduleId 对应的模块
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // 自定义 module 对象，且包含 exports 属性
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    // 向 __webpack_modules__ 对应模块的 eval 函数中，传入 module；解析模块时回递归加载模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  // 向外抛出当前 "moduleId" 对应的 "module.exports" 内容
  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
