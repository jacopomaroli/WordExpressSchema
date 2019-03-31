'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _category = require('./category');

var _category2 = _interopRequireDefault(_category);

var _post = require('./post.js');

var _post2 = _interopRequireDefault(_post);

var _menu = require('./menu.js');

var _menu2 = _interopRequireDefault(_menu);

var _metaType = require('./metaType');

var _metaType2 = _interopRequireDefault(_metaType);

var _setting = require('./setting');

var _setting2 = _interopRequireDefault(_setting);

var _orderInput = require('./inputs/orderInput');

var _orderInput2 = _interopRequireDefault(_orderInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RootQuery = '\n  type Query {\n    settings: Setting\n    posts(post_type: [String], limit: Int, skip: Int, order: OrderInput, userId: Int): [Post]\n    post(name: String, id: Int): Post\n    attachments(ids: [Int]): [Thumbnail]\n    postmeta(post_id: Int!, keys: [MetaType]): [Postmeta]\n    menus(name: String!): Menu\n    category(term_id: Int, name: String): Category\n    user(name: String, id: Int): User\n  }\n';

var SchemaDefinition = '\n  schema {\n    query: Query\n  }\n';

exports.default = [_category2.default, _menu2.default, _metaType2.default, _post2.default, _setting2.default, _orderInput2.default, RootQuery, SchemaDefinition];
//# sourceMappingURL=schema.js.map