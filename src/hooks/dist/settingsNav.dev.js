"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useSettingsNav = function useSettingsNav() {
  var _useLocation = (0, _reactRouterDom.useLocation)(),
      search = _useLocation.search;

  var _useState = (0, _react.useState)([{
    id: 1,
    to: "?tab=general",
    name: "General",
    active: true
  }, {
    id: 2,
    to: "?tab=settlements",
    name: "Settlements",
    active: false
  }, {
    id: 3,
    to: "?tab=api-keys-webhooks",
    name: "API Keys & Webhooks",
    active: false
  }, {
    id: 4,
    to: "?tab=currency",
    name: "Currency",
    active: false
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      settingsNav = _useState2[0],
      setSettingsNav = _useState2[1];

  (0, _react.useEffect)(function () {
    setSettingsNav(settingsNav.map(function (item) {
      if (item.to === search) item.active = true;else item.active = false;
      return item;
    }));
  }, []);
  return [settingsNav, setSettingsNav];
};

var _default = useSettingsNav;
exports["default"] = _default;