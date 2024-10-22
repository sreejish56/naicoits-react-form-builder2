"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _myxss = _interopRequireDefault(require("./myxss"));

var ComponentLabel = function ComponentLabel(props) {
  var _props$data$isShowQue, _props$data, _props$data$qIndex, _props$data2;

  var hasRequiredLabel = props.data.hasOwnProperty("required") && props.data.required === true && !props.read_only;
  var isShowQuestionNumber = (_props$data$isShowQue = (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.isShowQuestionNumber) !== null && _props$data$isShowQue !== void 0 ? _props$data$isShowQue : false;

  var labelText = _myxss["default"].process(props.data.label);

  if (!labelText) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("label", {
    className: props.className || "form-label"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex max-w-full"
  }, isShowQuestionNumber ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "react-form-builder-question-number"
  }, (_props$data$qIndex = (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.qIndex) !== null && _props$data$qIndex !== void 0 ? _props$data$qIndex : 0, ".") : null, /*#__PURE__*/_react["default"].createElement("span", {
    dangerouslySetInnerHTML: {
      __html: labelText
    }
  })), hasRequiredLabel && /*#__PURE__*/_react["default"].createElement("span", {
    className: "label-required badge badge-danger"
  }, "Required"));
};

var _default = ComponentLabel;
exports["default"] = _default;