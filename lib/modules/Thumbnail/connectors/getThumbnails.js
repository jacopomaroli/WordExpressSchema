'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Postmeta, Post, settings) {
  return function (ids) {
    var where = {
      post_type: 'attachment',
      id: _defineProperty({}, Op.in, ids)
    };

    var amazonS3 = settings.publicSettings.amazonS3;

    var metaKeys = amazonS3 ? ['amazonS3_info'] : ['_wp_attached_file'];
    metaKeys.push('_wp_attachment_metadata');

    return Post.findAll({
      where: where,
      include: {
        model: Postmeta
      }
    }).then(function (thumbnails) {
      if (thumbnails) {
        return thumbnails.map(function (thumbnail) {
          return (0, _shapeThumbnail2.default)(thumbnail, settings);
        });
      }
      return null;
    });
  };
};

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _shapeThumbnail = require('../shapeThumbnail');

var _shapeThumbnail2 = _interopRequireDefault(_shapeThumbnail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = _sequelize2.default.Op;
//# sourceMappingURL=getThumbnails.js.map