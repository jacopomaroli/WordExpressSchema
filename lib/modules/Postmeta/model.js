'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Conn, prefix) {
  return Conn.define(prefix + 'postmeta', {
    meta_id: { type: _sequelize2.default.INTEGER, primaryKey: true, field: 'meta_id' },
    post_id: { type: _sequelize2.default.INTEGER },
    meta_key: { type: _sequelize2.default.STRING },
    meta_value: { type: _sequelize2.default.INTEGER }
  });
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=model.js.map