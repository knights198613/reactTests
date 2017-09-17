webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(["Hello ", " World ", ""], ["Hello ", " World ", ""]),
    _templateObject2 = _taggedTemplateLiteral(["123"], ["123"]),
    _templateObject3 = _taggedTemplateLiteral(["First line\nSecond title"], ["First line\\nSecond title"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by Franco on 2017/9/14
 *
 */

function tag(s1, v1, v2) {
    console.log(s1[0]);
    console.log(s1[1]);
    console.log(s1[2]);
    console.log(v1);
    console.log(v2);
    var d = "Ok";
    return d;
}
var a = 5;
var b = 10;
var tg = tag(_templateObject, a + b, a * b);

console.log(tg);

console.log(_templateObject2);

function ac(strings) {
    console.log(strings[0]);
    console.log(strings.raw[0]);
}

ac(_templateObject3);

/***/ })

},[118]);