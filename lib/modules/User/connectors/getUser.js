"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (User) {
  return function (_ref) {
    var userId = _ref.userId,
        name = _ref.name;


    var where = {};

    if (userId) {
      where.ID = userId;
    }

    if (name) {
      where.user_nicename = name;
    }

    return User.findOne({
      where: where
    });
  };
};
//# sourceMappingURL=getUser.js.map