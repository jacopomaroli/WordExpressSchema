'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Terms) {
  return function (termId, name) {
    return Terms.findOne({
      where: _defineProperty({}, Op.or, [{ term_id: termId }, { name: name }])
    });
  };
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = _sequelize2.default.Op;
//# sourceMappingURL=getTerm.js.map