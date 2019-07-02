webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");








var _jsxFileName = "C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Footer.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    height: 45px;\n    width: 80px;\n    border-radius: 50%;\n    font-size: 30px;\n    text-align: center;\n    background-color: white;\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    border: none;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var b1 = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button(_templateObject());

var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Footer, _React$Component);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "submitHandler", function (event) {
      event.preventDefault();

      _this.props.add(_this.state.value);

      _this.setState({
        value: ''
      });
    });

    _this.state = {
      value: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.submitHandler,
        className: "jsx-4085800429",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this2.setState({
            value: event.target.value
          });
        },
        className: "jsx-4085800429",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "submit",
        value: String.fromCharCode(9997),
        className: "jsx-4085800429",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-4085800429" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b1", {
        onClick: this.props.navigation.bind(null, -10),
        className: "jsx-4085800429",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, " ", String.fromCharCode(171), " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("strong", {
        className: "jsx-4085800429",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, this.props.page / 10 + 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("b1", {
        onClick: this.props.navigation.bind(null, 10),
        className: "jsx-4085800429",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " ", String.fromCharCode(187), " ")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "4085800429",
        __self: this
      }, "form.jsx-4085800429{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}textarea.jsx-4085800429{height:50px;width:70%;min-width:200px;}input[type='submit'].jsx-4085800429{height:56px;width:75px;}textarea.jsx-4085800429:focus{outline:none;}.nav.jsx-4085800429{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}strong.jsx-4085800429{color:white;font-size:30px;}button.jsx-4085800429:focus,button.jsx-4085800429:hover{outline:none;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvZml0NzcuREVTS1RPUC1CR0RFSktSXFxEZXNrdG9wXFx0ZXN0X2FwcF9hZ2FsYWtvdlxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDb0IsQUFHOEIsQUFLRCxBQUtBLEFBSUMsQUFHQSxBQU1ELEFBS0MsWUF0QkgsQUFLQyxBQWNoQixDQVZDLEFBY21CLFNBckJwQixDQUlDLElBYUEsQ0FLQSxVQXRCQSxvQ0FQdUIsQUFpQlAsWUFDaUIseURBakJOLGtFQWtCSixpQ0FqQnZCLDREQWtCQSIsImZpbGUiOiJDOlxcVXNlcnNcXFByb2ZpdDc3LkRFU0tUT1AtQkdERUpLUlxcRGVza3RvcFxcdGVzdF9hcHBfYWdhbGFrb3ZcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBiMSA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGBcclxuXHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogJyd9O1xyXG4gICAgfVxyXG4gICAgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMucHJvcHMuYWRkKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiAnJ30pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHt0aGlzLnN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWUgPSB7dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2UgPSB7ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pfS8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSBcInN1Ym1pdFwiIHZhbHVlID0ge1N0cmluZy5mcm9tQ2hhckNvZGUoOTk5Nyl9PjwvaW5wdXQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ25hdic+XHJcbiAgICAgICAgICAgIDxiMSBvbkNsaWNrID0ge3RoaXMucHJvcHMubmF2aWdhdGlvbi5iaW5kKG51bGwsIC0xMCl9PiB7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzEpfSA8L2IxPiBcclxuICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5wYWdlIC8gMTAgKyAxfTwvc3Ryb25nPiBcclxuICAgICAgICAgICAgPGIxIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5uYXZpZ2F0aW9uLmJpbmQobnVsbCwgMTApfT4ge1N0cmluZy5mcm9tQ2hhckNvZGUoMTg3KX0gPC9iMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnV0dG9uOmZvY3VzLCBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdfQ== */\n/*@ sourceURL=C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Footer.js */"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.220995cc8a7b76cd9273.hot-update.js.map