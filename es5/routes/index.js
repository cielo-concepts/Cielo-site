'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pages = require('./pages');

var _pages2 = _interopRequireDefault(_pages);

var _portfolio = require('./portfolio');

var _portfolio2 = _interopRequireDefault(_portfolio);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', _pages2.default.index);
router.get('/portfolio', _portfolio2.default.index);
router.get('/portfolio/detail/:name', _portfolio2.default.detail);

module.exports = router;
//# sourceMappingURL=index.js.map
