'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (Terms, TermRelationships, TermTaxonomy, settings) {
  var wp_prefix = settings.privateSettings.wp_prefix;


  return function (postId) {
    return TermRelationships.findAll({
      where: {
        object_id: postId
      },
      include: [{
        attributes: ['name', 'slug'],
        model: Terms
      }, {
        attributes: ['taxonomy', 'parent'],
        model: TermTaxonomy
      }]
    }).then(function (relationships) {
      return relationships.map(function (r) {
        return _extends({}, r.dataValues[wp_prefix + 'term'].dataValues, r.dataValues[wp_prefix + 'term_taxonomy'].dataValues);
      });
    });
  };
};
//# sourceMappingURL=getPostTerms.js.map