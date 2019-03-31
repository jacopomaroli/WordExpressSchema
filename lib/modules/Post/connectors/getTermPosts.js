'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (TermRelationships, Post, TermTaxonomy, settings) {
  var wp_prefix = settings.privateSettings.wp_prefix;


  return function (termId, _ref) {
    var post_type = _ref.post_type,
        order = _ref.order,
        _ref$limit = _ref.limit,
        limit = _ref$limit === undefined ? 10 : _ref$limit,
        _ref$skip = _ref.skip,
        skip = _ref$skip === undefined ? 0 : _ref$skip,
        from_date = _ref.from_date,
        to_date = _ref.to_date;

    var orderBy = order ? [Post, order.orderBy, order.direction] : [Post, 'post_date', 'DESC'];

    var termIds = [termId];

    function getTermIds(parentTermIds) {
      if (!parentTermIds.length) return termIds;

      return TermTaxonomy.findAll({
        attributes: ['term_taxonomy_id'],
        include: [],
        where: {
          parent: parentTermIds
        }
      }).then(function (posts) {
        var p = posts.map(function (post) {
          return post.term_taxonomy_id;
        });
        termIds.push.apply(termIds, _toConsumableArray(p));
        return p;
      }).then(getTermIds);
    }

    var PostWhere = {
      post_type: post_type,
      post_status: 'publish'
    };

    if (from_date) {
      PostWhere.post_date = PostWhere.post_date || {};
      PostWhere.post_date[Op.gte] = new Date(from_date);
    }

    if (to_date) {
      PostWhere.post_date = PostWhere.post_date || {};
      PostWhere.post_date[Op.lte] = new Date(to_date);
    }

    return getTermIds([termId]).then(function (termIds) {
      return TermRelationships.findAll({
        attributes: [],
        include: [{
          model: Post,
          where: PostWhere
        }, {
          model: TermTaxonomy,
          where: {
            taxonomy: 'category'
          }
        }],
        where: {
          term_taxonomy_id: termIds
        },
        order: [orderBy],
        limit: limit,
        offset: skip
      });
    }).then(function (posts) {
      var p = posts.map(function (post) {
        return post[wp_prefix + 'post'];
      });
      return p;
    });
  };
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Op = _sequelize2.default.Op;
//# sourceMappingURL=getTermPosts.js.map