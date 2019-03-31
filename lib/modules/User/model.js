'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Conn, prefix) {
  return Conn.define(prefix + 'users', {
    id: { type: _sequelize2.default.INTEGER, primaryKey: true },
    user_nicename: { type: _sequelize2.default.STRING },
    user_email: { type: _sequelize2.default.STRING },
    user_registered: { type: _sequelize2.default.STRING },
    display_name: { type: _sequelize2.default.STRING }
  });
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=model.js.map