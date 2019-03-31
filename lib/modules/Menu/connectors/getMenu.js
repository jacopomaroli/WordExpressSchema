'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Post, Postmeta, Terms, TermRelationships) {
  return function (name) {
    return Terms.findOne({
      where: {
        slug: name
      },
      include: [{
        model: TermRelationships,
        include: [{
          model: Post,
          attributes: ['post_parent', 'id', 'menu_order'],
          include: [{
            model: Postmeta
          }]
        }]
      }]
    }).then(function (res) {
      if (res) {
        var menu = {
          id: null,
          name: name,
          items: null
        };
        menu.id = res.term_id;
        var relationship = res.wp_term_relationships;

        var postFuncs = [(0, _map2.default)(function (x) {
          return x.wp_post;
        }), (0, _map2.default)(function (x) {
          return x.dataValues;
        }), (0, _sortBy2.default)(function (x) {
          return x.menu_order;
        }), (0, _map2.default)(function (x) {
          var postMeta = x.wp_postmeta.map(function (x) {
            return x.dataValues;
          });

          var item = {
            id: x.id,
            order: x.menu_order
          };

          item.parentMenuId = parseInt((0, _flow2.default)((0, _filter2.default)(function (x) {
            return x.meta_key === '_menu_item_menu_item_parent';
          }), (0, _map2.default)(function (x) {
            return x.meta_value;
          }))(postMeta)[0]);

          item.linkedId = parseInt((0, _flow2.default)((0, _filter2.default)(function (x) {
            return x.meta_key === '_menu_item_object_id';
          }), (0, _map2.default)(function (x) {
            return x.meta_value;
          }))(postMeta)[0]);

          return item;
        })];

        var items = (0, _flow2.default)(postFuncs)(relationship);

        var itemsWithChildren = (0, _flow2.default)((0, _map2.default)(function (item) {
          item.children = items.filter(function (i) {
            return i.parentMenuId === item.id;
          });
          return item;
        }), (0, _filter2.default)(function (item) {
          return item.parentMenuId === 0;
        }))(items);

        menu.items = itemsWithChildren;

        return menu;
      }
      return null;
    });
  };
};

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _filter = require('lodash/fp/filter');

var _filter2 = _interopRequireDefault(_filter);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

var _sortBy = require('lodash/fp/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=getMenu.js.map