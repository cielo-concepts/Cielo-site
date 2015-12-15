'use strict';

import express    from 'express';
import pages      from './pages';
import portfolio  from './portfolio';
import fs   from 'fs';

let router = express.Router();

router.get('/', pages.index);
router.get('/portfolio', portfolio.index);
router.get('/portfolio/detail/:name', portfolio.detail);

module.exports = router;