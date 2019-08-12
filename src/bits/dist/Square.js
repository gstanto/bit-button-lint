"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Square = function Square(props) {
  return _react.default.createElement("div", {
    style: {
      width: 100,
      height: 100,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "Square");
};

var _default = Square;
exports.default = _default;

//# sourceMappingURL=Square.js.map