"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Thumbnail = "\n  type Thumbnail {\n    id: Int\n    src: String\n    sizes: [ThumbnailSize]\n  }\n";

var Size = "\n  type ThumbnailSize {\n    size: String,\n    file: String\n  }\n";

exports.default = [Thumbnail, Size];
//# sourceMappingURL=thumbnail.js.map