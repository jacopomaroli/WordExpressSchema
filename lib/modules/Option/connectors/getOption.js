"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (Option) {
  return function (option_name, defaultValue) {
    defaultValue = defaultValue || false;

    return Option.findOne({
      where: {
        option_name: option_name
      }
    }).then(function (option) {
      return option.option_value || defaultValue;
    });
  };
};
//# sourceMappingURL=getOption.js.map