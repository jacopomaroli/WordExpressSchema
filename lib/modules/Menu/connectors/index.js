'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var Post = _ref.Post,
      Postmeta = _ref.Postmeta,
      Terms = _ref.Terms,
      TermRelationships = _ref.TermRelationships;

  return {
    getMenu: (0, _getMenu2.default)(Post, Postmeta, Terms, TermRelationships)
  };
};

var _getMenu = require('./getMenu');

var _getMenu2 = _interopRequireDefault(_getMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map