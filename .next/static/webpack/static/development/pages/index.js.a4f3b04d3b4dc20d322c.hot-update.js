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
        className: "jsx-451355554",
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
        className: "jsx-451355554",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "submit",
        value: String.fromCharCode(9997),
        className: "jsx-451355554",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-451355554" + " " + 'nav',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.props.navigation.bind(null, -10),
        className: "jsx-451355554",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-451355554",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, String.fromCharCode(171)), " "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
        className: "jsx-451355554",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.props.page / 10 + 1), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.props.navigation.bind(null, 10),
        className: "jsx-451355554",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-451355554",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, String.fromCharCode(187)), " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "451355554",
        __self: this
      }, "form.jsx-451355554{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}textarea.jsx-451355554{height:50px;width:70%;min-width:200px;}input[type='submit'].jsx-451355554{height:56px;width:75px;}textarea.jsx-451355554:focus{outline:none;}.nav.jsx-451355554{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:80px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}strong.jsx-451355554{color:white;font-size:30px;}button.jsx-451355554{height:45px;width:80px;border-radius:50%;font-size:30px;text-align:center;background-color:white;box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);border:none;}button.jsx-451355554:focus,button.jsx-451355554:hover{outline:none;cursor:pointer;}.span.jsx-451355554{margin-bottom:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJvZml0NzcuREVTS1RPUC1CR0RFSktSXFxEZXNrdG9wXFx0ZXN0X2FwcF9hZ2FsYWtvdlxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IsQUFHOEIsQUFLRCxBQUtBLEFBSUMsQUFHQSxBQU1ELEFBSUEsQUFVQyxBQUtsQixZQXBDZSxBQUtDLEFBY2hCLEFBR2dCLENBYmYsQUF1Qm1CLEtBSW5CLElBbENELENBSUMsQUFpQnNCLElBSnRCLENBY0EsVUEvQkEsR0FzQm1CLGVBQ0csa0JBOUJDLEFBaUJQLEFBY1csWUFiTSxXQWN5Qyw4Q0EvQi9DLHVCQWdDWCxZQUNoQiwrQkFmdUIsaUNBakJ2Qiw0REFrQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcm9maXQ3Ny5ERVNLVE9QLUJHREVKS1JcXERlc2t0b3BcXHRlc3RfYXBwX2FnYWxha292XFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6ICcnfTtcclxuICAgIH1cclxuICAgIHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLnByb3BzLmFkZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogJyd9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7dGhpcy5zdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlID0ge3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KX0vPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0gXCJzdWJtaXRcIiB2YWx1ZSA9IHtTdHJpbmcuZnJvbUNoYXJDb2RlKDk5OTcpfT48L2lucHV0PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICduYXYnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7dGhpcy5wcm9wcy5uYXZpZ2F0aW9uLmJpbmQobnVsbCwgLTEwKX0+IDxzcGFuPntTdHJpbmcuZnJvbUNoYXJDb2RlKDE3MSl9PC9zcGFuPiA8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMucGFnZSAvIDEwICsgMX08L3N0cm9uZz4gXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHt0aGlzLnByb3BzLm5hdmlnYXRpb24uYmluZChudWxsLCAxMCl9PiA8c3Bhbj57U3RyaW5nLmZyb21DaGFyQ29kZSgxODcpfTwvc3Bhbj4gPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbjpmb2N1cywgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNwYW57XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdfQ== */\n/*@ sourceURL=C:\\Users\\Profit77.DESKTOP-BGDEJKR\\Desktop\\test_app_agalakov\\components\\Footer.js */"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.a4f3b04d3b4dc20d322c.hot-update.js.map