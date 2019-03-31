'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postmeta = require('./postmeta');

var _postmeta2 = _interopRequireDefault(_postmeta);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _thumbnail = require('./thumbnail');

var _thumbnail2 = _interopRequireDefault(_thumbnail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Post = '\n  type Post {\n    id: Int\n    post_title: String\n    post_content: String\n    post_excerpt(excerpt_length: Int): String\n    post_status: String\n    post_type: String\n    post_name: String\n    post_parent: Int\n    post_date: String\n    menu_order: Int\n    layout: Postmeta\n    thumbnail: Thumbnail\n    categories: [Category]\n    post_meta(keys: [MetaType], after: String, first: Int, before: String, last: Int): [Postmeta]\n    author: User\n    permalink(permalink: String, leavename: Boolean): String\n  }\n';

exports.default = function () {
  return [Post, _postmeta2.default, _user2.default].concat(_toConsumableArray(_thumbnail2.default));
};
//# sourceMappingURL=post.js.map