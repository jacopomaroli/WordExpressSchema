'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = '\n  type Category {\n    term_id: Int!\n    name: String\n    slug: String\n    posts(post_type: String = "post", limit: Int, skip: Int, order: OrderInput, from_date: String, to_date: String): [Post]\n  }\n';

exports.default = function () {
  return [Category, _post2.default];
};
//# sourceMappingURL=category.js.map