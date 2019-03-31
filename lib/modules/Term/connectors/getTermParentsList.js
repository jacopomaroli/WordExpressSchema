'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Terms, TermTaxonomy, settings) {
  var wp_prefix = settings.privateSettings.wp_prefix;


  return function getTermParentsList(parentTermId, termIds) {
    termIds = termIds || [];

    return TermTaxonomy.findOne({
      attributes: ['parent'],
      where: {
        term_taxonomy_id: parentTermId
      },
      include: [{
        attributes: ['slug', 'name'],
        model: Terms
      }]
    }).then(function (term_taxonomy) {
      if (term_taxonomy) {
        var res = {
          parent: term_taxonomy.parent,
          slug: term_taxonomy[wp_prefix + 'term'].slug,
          name: term_taxonomy[wp_prefix + 'term'].name
        };
        termIds = [res].concat(_toConsumableArray(termIds));
        return getTermParentsList(term_taxonomy.parent, termIds);
      }
      return termIds;
    });
  };
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//# sourceMappingURL=getTermParentsList.js.map