'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Postmeta) {
  return function (postId) {
    return Postmeta.findOne({
      where: {
        post_id: postId,
        meta_key: 'page_layout_component'
      }
    });
  };
};
//# sourceMappingURL=getPostLayout.js.map