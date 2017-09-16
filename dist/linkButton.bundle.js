webpackJsonp([1],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Franco on 2017/9/14
 *
 */
var createDomByString = function createDomByString(htmString) {
    var div = document.createElement("div");
    div.innerHTML = htmString;
    return div;
};

var linkedButton = function () {
    function linkedButton() {
        _classCallCheck(this, linkedButton);

        this.state = { isLiked: false };
    }

    _createClass(linkedButton, [{
        key: "changeText",
        value: function changeText() {
            this.state.isLiked = !this.state.isLiked;
            var likeText = document.querySelector(".like-text");
            likeText.innerHTML = this.state.isLiked ? "点赞" : "取消";
        }
    }, {
        key: "render",
        value: function render() {
            this.el = createDomByString("\n                 <button class=\"like-button\">\n                    <span class=\"like-text\">\u70B9\u8D5E</span>\n                 </button>");
            this.el.addEventListener('click', this.changeText.bind(this), false);
            return this.el;
        }
    }]);

    return linkedButton;
}();

var wrapper = document.querySelector(".wrapper");
wrapper.appendChild(new linkedButton().render());

/***/ })

},[116]);