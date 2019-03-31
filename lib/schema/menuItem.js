'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = '\n  type MenuItem {\n    id: ID!\n    linkedId: Int\n    order: Int\n    navitem: Post\n    children: [MenuItem]\n  }\n';

exports.default = function () {
  return [MenuItem, _post2.default];
};
//# sourceMappingURL=menuItem.js.map