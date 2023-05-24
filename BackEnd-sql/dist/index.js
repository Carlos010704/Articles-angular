"use strict";

var _app = _interopRequireDefault(require("./app"));
var _connection = require("./database/connection");
var _article = _interopRequireDefault(require("./routes/article.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_app["default"].get('port'));
_app["default"].use('/', _article["default"]);
console.log('Server on http://127.0.0.1:' + _app["default"].get('port'));
(0, _connection.getConnection)();