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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Footer.js";



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

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.submitHandler,
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this2.setState({
            value: event.target.value
          });
        },
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "submit",
        value: String.fromCharCode(9997),
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4140543430" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.props.navigation.bind(null, -10),
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, String.fromCharCode(171)), " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.page / 10 + 1), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.props.navigation.bind(null, 10),
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-4140543430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, String.fromCharCode(187)), " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4140543430",
        __self: this
      }, "form.jsx-4140543430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}textarea.jsx-4140543430{height:50px;width:70%;min-width:200px;}input[type='submit'].jsx-4140543430{height:56px;width:75px;}textarea.jsx-4140543430:focus{outline:none;}.nav.jsx-4140543430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}strong.jsx-4140543430{color:white;font-size:30px;}button.jsx-4140543430{height:45px;width:80px;border-radius:50%;font-size:30px;text-align:center;background-color:white;box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);border:none;}button.jsx-4140543430:focus,button.jsx-4140543430:hover{outline:none;cursor:pointer;}button.jsx-4140543430:hover{background-color:red;color:white;}span.jsx-4140543430{position:relative;bottom:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvZml0NzcuREVTS1RPUC1CR0RFSktSXFxEZXNrdG9wXFx0ZXN0X2FwcF9hZ2FsYWtvdlxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IsQUFHOEIsQUFLRCxBQUtBLEFBSUMsQUFHQSxBQU1ELEFBSUEsQUFVQyxBQUlRLEFBSUgsWUF2Q1IsQUFLQyxBQWNoQixBQUdnQixDQWJmLEFBdUJtQixLQVFKLEdBSkMsQ0FsQ2pCLENBSUMsQUFpQnNCLElBSnRCLENBY0EsQ0FRQSxJQUpBLEtBbkNBLEdBc0JtQixlQUNHLGtCQTlCQyxBQWlCUCxBQWNXLFlBYk0sV0FjeUMsOENBL0IvQyx1QkFnQ1gsWUFDaEIsK0JBZnVCLGlDQWpCdkIsNERBa0JBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUHJvZml0NzcuREVTS1RPUC1CR0RFSktSXFxEZXNrdG9wXFx0ZXN0X2FwcF9hZ2FsYWtvdlxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiAnJ307XHJcbiAgICB9XHJcbiAgICBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGQodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6ICcnfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3RoaXMuc3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZSA9IHt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9IFwic3VibWl0XCIgdmFsdWUgPSB7U3RyaW5nLmZyb21DaGFyQ29kZSg5OTk3KX0+PC9pbnB1dD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbmF2Jz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3RoaXMucHJvcHMubmF2aWdhdGlvbi5iaW5kKG51bGwsIC0xMCl9PiA8c3Bhbj57U3RyaW5nLmZyb21DaGFyQ29kZSgxNzEpfTwvc3Bhbj4gPC9idXR0b24+IFxyXG4gICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLnBhZ2UgLyAxMCArIDF9PC9zdHJvbmc+IFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5uYXZpZ2F0aW9uLmJpbmQobnVsbCwgMTApfT4gPHNwYW4+e1N0cmluZy5mcm9tQ2hhckNvZGUoMTg3KX08L3NwYW4+IDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b246Zm9jdXMsIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Footer.js */"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Main.js";



var Main =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Main, _React$Component);

  function Main(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Main);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Main).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Main, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3599852780",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, this.props.date.map(function (it) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: it.id,
          className: "jsx-3599852780",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3599852780" + " " + "item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, it.body), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3599852780" + " " + "del",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          onClick: _this.props.del.bind(null, it.id),
          className: "jsx-3599852780",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, String.fromCharCode(215))));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3599852780",
        __self: this
      }, "ul.jsx-3599852780{overflow:auto;height:500px;padding:0px;background-color:white;margin:0px;}li.jsx-3599852780{list-style-type:none;font-size:1.4em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid black;margin-left:5%;margin-right:5%;margin-top:20px;}.item.jsx-3599852780{-webkit-flex-basis:90%;-ms-flex-preferred-size:90%;flex-basis:90%;}.del.jsx-3599852780{-webkit-flex-basis:10%;-ms-flex-preferred-size:10%;flex-basis:10%;}button.jsx-3599852780{width:30px;height:30px;font-size:30px;text-align:center;background-color:white;outline:none;border:none;}button.jsx-3599852780:focus,button.jsx-3599852780:hover{outline:none;cursor:pointer;color:red;}button.jsx-3599852780:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvZml0NzcuREVTS1RPUC1CR0RFSktSXFxEZXNrdG9wXFx0ZXN0X2FwcF9hZ2FsYWtvdlxcY29tcG9uZW50c1xcTWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnVCLEFBR21DLEFBUU8sQUFZTixBQUlBLEFBR0osQUFTRSxBQUtILFVBQ2QsQ0FkZ0IsRUFTRyxDQXBDRixPQVFHLEVBb0JELElBM0JILENBb0NGLFNBNUJHLENBb0JNLEFBU3ZCLENBcEMyQixpQkE0QkEsTUEzQlosSUFrQmYsQUFHQSxPQXBCQSxNQTJCaUIsYUFDRCxZQUNoQixPQXZCYyxVQUNvQixtSEFDQSw4QkFDZixlQUNDLGdCQUNBLGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXFByb2ZpdDc3LkRFU0tUT1AtQkdERUpLUlxcRGVza3RvcFxcdGVzdF9hcHBfYWdhbGFrb3ZcXGNvbXBvbmVudHNcXE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGUubWFwKGl0ID0+IFxyXG4gICAgICAgICAgIDxsaSBrZXkgPSB7aXQuaWR9PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+e2l0LmJvZHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJkZWxcIj48YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5kZWwuYmluZChudWxsLCBpdC5pZCl9PntTdHJpbmcuZnJvbUNoYXJDb2RlKDIxNSl9PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICApfVxyXG4gICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbjpmb2N1cywgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNYWluIl19 */\n/*@ sourceURL=C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Main.js */"));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=index.js.66a6c980f202b5698459.hot-update.js.map