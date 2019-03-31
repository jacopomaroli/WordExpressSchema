'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref, settings) {
  var Terms = _ref.Terms,
      TermTaxonomy = _ref.TermTaxonomy;

  return {
    getTerm: (0, _getTerm2.default)(Terms),
    getTermParentsList: (0, _getTermParentsList2.default)(Terms, TermTaxonomy, settings)
  };
};

var _getTerm = require('./getTerm');

var _getTerm2 = _interopRequireDefault(_getTerm);

var _getTermParentsList = require('./getTermParentsList');

var _getTermParentsList2 = _interopRequireDefault(_getTermParentsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map