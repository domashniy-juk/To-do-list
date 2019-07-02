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
        className: "jsx-4242574795",
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
        className: "jsx-4242574795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "submit",
        value: String.fromCharCode(9997),
        className: "jsx-4242574795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-4242574795" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.props.navigation.bind(null, -10),
        className: "jsx-4242574795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, " ", String.fromCharCode(171), " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-4242574795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.page / 10 + 1), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.props.navigation.bind(null, 10),
        className: "jsx-4242574795",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, " ", String.fromCharCode(187), " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4242574795",
        __self: this
      }, "form.jsx-4242574795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}textarea.jsx-4242574795{height:50px;width:70%;min-width:200px;}input[type='submit'].jsx-4242574795{height:56px;width:75px;}textarea.jsx-4242574795:focus{outline:none;}.nav.jsx-4242574795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}strong.jsx-4242574795{color:white;font-size:30px;}button.jsx-4242574795{height:45px;width:80px;border-radius:50%;font-size:30px;text-align:center;background-color:white;box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);border:none;}button.jsx-4242574795:focus,button.jsx-4242574795:hover{outline:none;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvZml0NzcuREVTS1RPUC1CR0RFSktSXFxEZXNrdG9wXFx0ZXN0X2FwcF9hZ2FsYWtvdlxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IsQUFHOEIsQUFLRCxBQUtBLEFBSUMsQUFHQSxBQU1ELEFBSUEsQUFVQyxZQS9CSCxBQUtDLEFBY2hCLEFBR2dCLENBYmYsQUF1Qm1CLFNBOUJwQixDQUlDLEFBaUJzQixJQUp0QixDQWNBLFVBL0JBLEdBc0JtQixlQUNHLGtCQTlCQyxBQWlCUCxBQWNXLFlBYk0sV0FjeUMsOENBL0IvQyx1QkFnQ1gsWUFDaEIsK0JBZnVCLGlDQWpCdkIsNERBa0JBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUHJvZml0NzcuREVTS1RPUC1CR0RFSktSXFxEZXNrdG9wXFx0ZXN0X2FwcF9hZ2FsYWtvdlxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiAnJ307XHJcbiAgICB9XHJcbiAgICBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PntcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGQodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6ICcnfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3RoaXMuc3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZSA9IHt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZSA9IHtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9Lz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9IFwic3VibWl0XCIgdmFsdWUgPSB7U3RyaW5nLmZyb21DaGFyQ29kZSg5OTk3KX0+PC9pbnB1dD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnbmF2Jz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3RoaXMucHJvcHMubmF2aWdhdGlvbi5iaW5kKG51bGwsIC0xMCl9PiB7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzEpfSA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMucGFnZSAvIDEwICsgMX08L3N0cm9uZz4gXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHt0aGlzLnByb3BzLm5hdmlnYXRpb24uYmluZChudWxsLCAxMCl9PiB7U3RyaW5nLmZyb21DaGFyQ29kZSgxODcpfSA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uOmZvY3VzLCBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdfQ== */\n/*@ sourceURL=C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Footer.js */"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
false,

/***/ "./node_modules/core-js/library/fn/object/freeze.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.freeze.js":
false,

/***/ "./node_modules/is-what/dist/index.esm.js":
false,

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
false,

/***/ "./node_modules/merge-anything/dist/index.esm.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/stylis-rule-sheet/index.js":
false,

/***/ "./node_modules/stylis/stylis.min.js":
false

})
//# sourceMappingURL=index.js.e3b8e397177b47b0f7b1.hot-update.js.map