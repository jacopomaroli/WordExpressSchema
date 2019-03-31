'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Postmeta = '\n  type Postmeta {\n    meta_id: Int\n    post_id: Int\n    meta_key: String\n    meta_value: String\n    connecting_post: Post\n  }\n';

exports.default = function () {
  return [Postmeta, _post2.default];
};
//# sourceMappingURL=postmeta.js.map