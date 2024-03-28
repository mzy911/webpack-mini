(() => {
  var __webpack_modules__ = {
    "./src/index.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      // 1、webpack 将文件中的 require() 方法转换为自定义的 __webpack_require__() 方法
      // 2、递归加载文件
      eval(
        "let name = __webpack_require__(/*! ./login.js */ \"./src/login.js\")\r\n\r\nconsole.log('index.js内容执行了')\r\nconsole.log(name)\r\n\n\n//# sourceURL=webpack://webpack-mini/./src/index.js?"
      );
    },

    "./src/login.js": (module) => {
      eval(
        "module.exports = '哈哈'\n\n//# sourceURL=webpack://webpack-mini/./src/login.js?"
      );
    },
  };
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
