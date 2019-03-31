'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function () {
  function maybeGetPermalink(self, permalink) {
    return permalink ? Promise.resolve(permalink) : self.getOption('permalink_structure');
  }

  function maybeFetchCategory(self, post, permalink) {
    if (permalink.indexOf('%category%') === -1) return Promise.resolve('');

    return self.getPostTerms(post.id).then(function (cats) {
      if (cats.length) {
        var categories = cats.sort(function (catA, catB) {
          return catA.term_id > catB.term_id;
        });
        var category_object = categories[0];
        var category = category_object.slug;
        return self.getTermParentsList(category_object.parent).then(function (termParentsList) {
          if (termParentsList.length) {
            category = termParentsList.reduce(function (acc, val) {
              return acc + val.slug + '/';
            }, '') + category;
          }
          return category || '';
        });
      } else {
        return self.getOption('default_category').then(function (default_category_id) {
          return self.getTerm(default_category_id);
        }).then(function (default_category) {
          return default_category.slug || '';
        });
      }
    });
  }

  function maybeFetchAuthor(self, post, permalink) {
    if (permalink.indexOf('%author%') === -1) return Promise.resolve('');

    return self.getUser(post.post_author).then(function (author_data) {
      return author_data.user_nicename;
    });
  }

  return function getPermalink(post, _ref) {
    var leavename = _ref.leavename,
        permalink = _ref.permalink;

    var self = this;

    var rewritecode = ['%year%', '%monthnum%', '%day%', '%hour%', '%minute%', '%second%', leavename ? '' : '%postname%', '%post_id%', '%category%', '%author%', leavename ? '' : '%pagename%'];

    if (!post.id) {
      return false;
    }

    return maybeGetPermalink(self, permalink).then(function (permalink) {
      var promises = [maybeFetchCategory(self, post, permalink), maybeFetchAuthor(self, post, permalink)];

      return Promise.all(promises).then(function (res) {
        return [permalink].concat(_toConsumableArray(res));
      });
    }).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 3),
          permalink = _ref3[0],
          category = _ref3[1],
          author = _ref3[2];

      var date = (0, _dateformat2.default)(post.post_date, 'yyyy mm dd HH MM ss').split(' ');

      var rewritereplace = [date[0], date[1], date[2], date[3], date[4], date[5], post.post_name, post.id, category, author, post.post_name];

      permalink = rewritecode.reduce(function (acc, val, i) {
        return acc = acc.replace(rewritecode[i], rewritereplace[i]);
      }, permalink);

      return self.getOption('home').then(function (home) {
        return home + permalink;
      });
    });
  };
};

var _dateformat = require('dateformat');

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//# sourceMappingURL=getPermalink.js.map