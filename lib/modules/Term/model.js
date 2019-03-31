'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermTaxonomyModel = exports.TermRelationshipModel = exports.TermModel = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermModel = function TermModel(Conn, prefix) {
  return Conn.define(prefix + 'terms', {
    term_id: { type: _sequelize2.default.INTEGER, primaryKey: true },
    name: { type: _sequelize2.default.STRING },
    slug: { type: _sequelize2.default.STRING },
    term_group: { type: _sequelize2.default.INTEGER }
  });
};

var TermRelationshipModel = function TermRelationshipModel(Conn, prefix) {
  return Conn.define(prefix + 'term_relationships', {
    object_id: { type: _sequelize2.default.INTEGER, primaryKey: true },
    term_taxonomy_id: { type: _sequelize2.default.INTEGER },
    term_order: { type: _sequelize2.default.INTEGER }
  });
};

var TermTaxonomyModel = function TermTaxonomyModel(Conn, prefix) {
  return Conn.define(prefix + 'term_taxonomy', {
    term_taxonomy_id: { type: _sequelize2.default.INTEGER, primaryKey: true },
    term_id: { type: _sequelize2.default.INTEGER },
    taxonomy: { type: _sequelize2.default.STRING },
    parent: { type: _sequelize2.default.INTEGER },
    count: { type: _sequelize2.default.INTEGER }
  });
};

exports.TermModel = TermModel;
exports.TermRelationshipModel = TermRelationshipModel;
exports.TermTaxonomyModel = TermTaxonomyModel;
//# sourceMappingURL=model.js.map