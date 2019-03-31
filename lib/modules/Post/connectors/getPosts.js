'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Post) {
  return function (_ref) {
    var post_type = _ref.post_type,
        order = _ref.order,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 10 : _ref$limit,
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        userId = _ref.userId;

    var orderBy = order ? [order.orderBy, order.direction] : ['menu_order', 'ASC'];
    var where = {
      post_status: 'publish',
      post_type: _defineProperty({}, Op.in, ['post'])
    };

    if (post_type) {
      where.post_type = _defineProperty({}, Op.in, post_type);
    }

    if (userId) {
      where.post_author = userId;
    }

    return Post.findAll({
      where: where,
      order: [orderBy],
      limit: limit,
      offset: skip
    }).then(function (r) {
      return r;
    });
  };
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = _sequelize2.default.Op;
//# sourceMappingURL=getPosts.js.map