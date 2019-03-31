'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Conn, prefix) {
  return Conn.define(prefix + 'posts', {
    id: { type: _sequelize2.default.INTEGER, primaryKey: true },
    post_author: { type: _sequelize2.default.INTEGER },
    post_title: { type: _sequelize2.default.STRING },
    post_content: { type: _sequelize2.default.STRING },
    post_excerpt: { type: _sequelize2.default.STRING },
    post_status: { type: _sequelize2.default.STRING },
    post_type: { type: _sequelize2.default.STRING },
    post_name: { type: _sequelize2.default.STRING },
    post_date: { type: _sequelize2.default.STRING },
    post_parent: { type: _sequelize2.default.INTEGER },
    menu_order: { type: _sequelize2.default.INTEGER }
  });
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=model.js.map