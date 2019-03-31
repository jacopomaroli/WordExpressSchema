'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = WordExpressResolvers;
function WordExpressResolvers(Connectors, publicSettings) {
  var Resolvers = {
    Query: {
      settings: function settings() {
        return publicSettings;
      },
      category: function category(_, _ref) {
        var term_id = _ref.term_id,
            name = _ref.name;

        return Connectors.getTerm(term_id, name);
      },
      posts: function posts(_, args) {
        return Connectors.getPosts(args);
      },
      post: function post(_, _ref2) {
        var name = _ref2.name,
            id = _ref2.id;

        return Connectors.getPost(id, name);
      },
      postmeta: function postmeta(_, _ref3) {
        var post_id = _ref3.post_id,
            keys = _ref3.keys;

        return Connectors.getPostmeta(post_id, keys);
      },
      menus: function menus(_, _ref4) {
        var name = _ref4.name;

        return Connectors.getMenu(name);
      },
      user: function user(_, _ref5) {
        var id = _ref5.id,
            name = _ref5.name;

        return Connectors.getUser({ id: id, name: name });
      },
      attachments: function attachments(_, _ref6) {
        var ids = _ref6.ids;

        return Connectors.getThumbnails(ids);
      }
    },
    Category: {
      posts: function posts(category, args) {
        return Connectors.getTermPosts(category.term_id, args);
      }
    },
    Post: {
      layout: function layout(post) {
        return Connectors.getPostLayout(post.id);
      },
      post_meta: function post_meta(post, keys) {
        return Connectors.getPostmeta(post.id, keys);
      },
      thumbnail: function thumbnail(post) {
        return Connectors.getPostThumbnail(post.id);
      },
      author: function author(post) {
        return Connectors.getUser({ userId: post.post_author });
      },
      categories: function categories(post) {
        return Connectors.getPostTerms(post.id);
      },
      permalink: function permalink(post, args) {
        return Connectors.getPermalink(post, args);
      },

      post_excerpt: function post_excerpt(post, _ref7) {
        var excerpt_length = _ref7.excerpt_length;

        return post.post_excerpt || post.post_content.split(' ').slice(0, excerpt_length || 55).join(' ');
      }
    },
    Postmeta: {
      connecting_post: function connecting_post(postmeta) {
        return Connectors.getPost(postmeta.meta_value);
      }
    },
    Menu: {
      items: function items(menu) {
        return menu.items;
      }
    },
    MenuItem: {
      navitem: function navitem(menuItem) {
        return Connectors.getPost(menuItem.linkedId);
      },
      children: function children(menuItem) {
        return menuItem.children;
      }
    },
    User: {
      posts: function posts(user, args) {
        var a = _extends({}, args, {
          userId: user.id
        });
        return Connectors.getPosts(a);
      }
    }
  };

  return Resolvers;
}
//# sourceMappingURL=resolvers.js.map