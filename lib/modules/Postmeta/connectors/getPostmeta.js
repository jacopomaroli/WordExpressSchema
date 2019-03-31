'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Postmeta) {
  return function (postId, _ref) {
    var keys = _ref.keys;

    var condition = {
      post_id: postId
    };

    if (keys && keys.length > 0) {
      condition.meta_key = _defineProperty({}, Op.in, keys);
    }

    return Postmeta.findAll({
      where: condition
    });
  };
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = _sequelize2.default.Op;
//# sourceMappingURL=getPostmeta.js.map