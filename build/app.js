"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

require("@babel/polyfill");

const app = (0, _express.default)();
const port = process.env.PORT || 8000;
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
})); // app.use(routes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
var _default = app;
exports.default = _default;