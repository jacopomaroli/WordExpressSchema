'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref, settings) {
  var Post = _ref.Post,
      Postmeta = _ref.Postmeta,
      Terms = _ref.Terms,
      TermRelationships = _ref.TermRelationships,
      TermTaxonomy = _ref.TermTaxonomy;

  return {
    getPost: (0, _getPost2.default)(Post),
    getPosts: (0, _getPosts2.default)(Post),
    getPostTerms: (0, _getPostTerms2.default)(Terms, TermRelationships, TermTaxonomy, settings),
    getTermPosts: (0, _getTermPosts2.default)(TermRelationships, Post, TermTaxonomy, settings),
    getPostLayout: (0, _getPostLayout2.default)(Postmeta),
    getPermalink: (0, _getPermalink2.default)()
  };
};

var _getPost = require('./getPost');

var _getPost2 = _interopRequireDefault(_getPost);

var _getPosts = require('./getPosts');

var _getPosts2 = _interopRequireDefault(_getPosts);

var _getPostTerms = require('./getPostTerms');

var _getPostTerms2 = _interopRequireDefault(_getPostTerms);

var _getTermPosts = require('./getTermPosts');

var _getTermPosts2 = _interopRequireDefault(_getTermPosts);

var _getPostLayout = require('./getPostLayout');

var _getPostLayout2 = _interopRequireDefault(_getPostLayout);

var _getPermalink = require('./getPermalink');

var _getPermalink2 = _interopRequireDefault(_getPermalink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map