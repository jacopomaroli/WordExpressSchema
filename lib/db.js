'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// MODELS


// CONNECTORS


var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _model = require('./modules/Post/model');

var _model2 = _interopRequireDefault(_model);

var _model3 = require('./modules/Postmeta/model');

var _model4 = _interopRequireDefault(_model3);

var _model5 = require('./modules/User/model');

var _model6 = _interopRequireDefault(_model5);

var _model7 = require('./modules/Term/model');

var _model8 = require('./modules/Option/model');

var _model9 = _interopRequireDefault(_model8);

var _connectors = require('./modules/Post/connectors');

var _connectors2 = _interopRequireDefault(_connectors);

var _connectors3 = require('./modules/Postmeta/connectors');

var _connectors4 = _interopRequireDefault(_connectors3);

var _connectors5 = require('./modules/Term/connectors');

var _connectors6 = _interopRequireDefault(_connectors5);

var _connectors7 = require('./modules/User/connectors');

var _connectors8 = _interopRequireDefault(_connectors7);

var _connectors9 = require('./modules/Menu/connectors');

var _connectors10 = _interopRequireDefault(_connectors9);

var _connectors11 = require('./modules/Thumbnail/connectors');

var _connectors12 = _interopRequireDefault(_connectors11);

var _connectors13 = require('./modules/Option/connectors');

var _connectors14 = _interopRequireDefault(_connectors13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WordExpressDatabase = function () {
  function WordExpressDatabase(settings) {
    _classCallCheck(this, WordExpressDatabase);

    this.settings = settings;
    this.connection = this.connect(settings);
    this.connectors = this.getConnectors();
    this.models = this.getModels();
  }

  _createClass(WordExpressDatabase, [{
    key: 'connect',
    value: function connect() {
      var _settings$privateSett = this.settings.privateSettings.database,
          name = _settings$privateSett.name,
          username = _settings$privateSett.username,
          password = _settings$privateSett.password,
          host = _settings$privateSett.host,
          port = _settings$privateSett.port;


      var Conn = new _sequelize2.default(name, username, password, {
        logging: false,
        dialect: 'mysql',
        host: host,
        port: port || 3306,
        define: {
          timestamps: false,
          freezeTableName: true
        }
      });

      return Conn;
    }
  }, {
    key: 'getModels',
    value: function getModels() {
      var prefix = this.settings.privateSettings.wp_prefix;
      var Conn = this.connection;

      return {
        Post: (0, _model2.default)(Conn, prefix),
        Postmeta: (0, _model4.default)(Conn, prefix),
        User: (0, _model6.default)(Conn, prefix),
        Terms: (0, _model7.TermModel)(Conn, prefix),
        TermRelationships: (0, _model7.TermRelationshipModel)(Conn, prefix),
        TermTaxonomy: (0, _model7.TermTaxonomyModel)(Conn, prefix),
        Option: (0, _model9.default)(Conn, prefix)
      };
    }
  }, {
    key: 'getConnectors',
    value: function getConnectors() {
      var models = this.getModels();
      var Post = models.Post,
          Postmeta = models.Postmeta,
          Terms = models.Terms,
          TermRelationships = models.TermRelationships,
          TermTaxonomy = models.TermTaxonomy;


      Terms.hasMany(TermRelationships, { foreignKey: 'term_taxonomy_id' });
      TermRelationships.belongsTo(Terms, { foreignKey: 'term_taxonomy_id' });
      TermRelationships.belongsTo(TermTaxonomy, { foreignKey: 'term_taxonomy_id' });

      TermRelationships.hasMany(Postmeta, { foreignKey: 'post_id' });
      Postmeta.belongsTo(TermRelationships, { foreignKey: 'post_id' });

      TermRelationships.belongsTo(Post, { foreignKey: 'object_id' });

      Post.hasMany(Postmeta, { foreignKey: 'post_id' });
      Postmeta.belongsTo(Post, { foreignKey: 'post_id' });

      TermTaxonomy.belongsTo(Terms, { foreignKey: 'term_id' });

      return _extends({}, (0, _connectors2.default)(models, this.settings), (0, _connectors4.default)(models), (0, _connectors6.default)(models, this.settings), (0, _connectors8.default)(models), (0, _connectors10.default)(models), (0, _connectors12.default)(models, this.settings), (0, _connectors14.default)(models));
    }
  }]);

  return WordExpressDatabase;
}();

exports.default = WordExpressDatabase;
//# sourceMappingURL=db.js.map