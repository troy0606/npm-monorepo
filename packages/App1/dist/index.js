"use strict";
exports.__esModule = true;
exports.isEven = void 0;
var qs_1 = require("qs");
var isEven = function (x) { return (0, qs_1.stringify)({ isEven: x % 2 === 0 }); };
exports.isEven = isEven;
var result = (0, exports.isEven)(5);
console.log(result);
