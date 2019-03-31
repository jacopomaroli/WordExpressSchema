'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menuItem = require('./menuItem');

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = '\n  type Menu {\n    id: ID!\n    name: String\n    items: [MenuItem]\n  }\n';

exports.default = function () {
  return [Menu, _menuItem2.default];
};
//# sourceMappingURL=menu.js.map