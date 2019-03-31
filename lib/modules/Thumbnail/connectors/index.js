'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref, settings) {
  var Post = _ref.Post,
      Postmeta = _ref.Postmeta,
      Terms = _ref.Terms,
      TermRelationships = _ref.TermRelationships;

  return {
    getPostThumbnail: (0, _getPostThumbnail2.default)(Postmeta, Post, settings),
    getThumbnails: (0, _getThumbnails2.default)(Postmeta, Post, settings)
  };
};

var _getPostThumbnail = require('./getPostThumbnail');

var _getPostThumbnail2 = _interopRequireDefault(_getPostThumbnail);

var _getThumbnails = require('./getThumbnails');

var _getThumbnails2 = _interopRequireDefault(_getThumbnails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map