"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HolaMundo = exports.Comp = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Comp = exports.Comp = function Comp(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hola, Mundo!"), children);
};
var HolaMundo = exports.HolaMundo = function HolaMundo() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Comp, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hola, Martes!")));
};