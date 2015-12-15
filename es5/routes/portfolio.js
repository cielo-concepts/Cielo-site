'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pages = require('./pages');

var _pages2 = _interopRequireDefault(_pages);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _portfolio = require('../data/portfolio');

var _portfolio2 = _interopRequireDefault(_portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var portfolio = {
   index: function index(req, res) {
      _fs2.default.readFile(__dirname + '/../../views/project-single.html', 'utf8', function (err, text) {
         res.send(text);
      });
   },
   detail: function detail(req, res) {
      var name = req.params.name;
      var portfolioDetail = _portfolio2.default[name];
      console.log(portfolioDetail);
      res.json(portfolioDetail);
   }
};

module.exports = portfolio;
//# sourceMappingURL=portfolio.js.map
