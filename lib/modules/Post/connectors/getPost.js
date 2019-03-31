'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Post) {
  return function (postId, name) {
    return Post.findOne({
      where: _defineProperty({
        post_status: 'publish'
      }, Op.or, [{ id: postId }, { post_name: name }])
    }).then(function (post) {
      if (post) {
        var _post$dataValues = post.dataValues,
            id = _post$dataValues.id,
            post_type = _post$dataValues.post_type;

        post.dataValues.children = [];
        return Post.findAll({
          attributes: ['id'],
          where: _defineProperty({}, Op.and, [{ post_parent: id }, { post_type: post_type }])
        }).then(function (childPosts) {
          if (childPosts.length > 0) {
            childPosts.map(function (childPost) {
              post.dataValues.children.push({ id: Number(childPost.dataValues.id) });
            });
          }

          return post;
        });
      }
      return null;
    });
  };
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = _sequelize2.default.Op;
//# sourceMappingURL=getPost.js.map