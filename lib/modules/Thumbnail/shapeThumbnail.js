'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (thumbnail, settings) {
  var file = void 0,
      fileMeta = void 0;
  var _settings$publicSetti = settings.publicSettings,
      amazonS3 = _settings$publicSetti.amazonS3,
      uploads = _settings$publicSetti.uploads;
  var wp_prefix = settings.privateSettings.wp_prefix;


  thumbnail[wp_prefix + 'postmeta'].forEach(function (postmeta) {
    switch (postmeta.meta_key) {
      case '_wp_attached_file':
        file = postmeta.meta_value;
        break;
      case '_wp_attachment_metadata':
        fileMeta = postmeta.meta_value;
        break;
    }
  });

  if (file) {
    var thumbnailSrc = amazonS3 ? uploads + _phpUnserialize2.default.unserialize(file).key : uploads + file;

    var thumbMeta = _phpUnserialize2.default.unserialize(fileMeta);
    var sizes = (0, _lodash.map)(thumbMeta.sizes, function (size, key) {
      return {
        size: key,
        file: size.file
      };
    });

    return {
      id: thumbnail.id,
      src: thumbnailSrc,
      sizes: sizes
    };
  }

  return null;
};

var _phpUnserialize = require('php-unserialize');

var _phpUnserialize2 = _interopRequireDefault(_phpUnserialize);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=shapeThumbnail.js.map