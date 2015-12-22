'use strict';

import express    from 'express';
import pages      from './pages';
import portfolio  from './portfolio';
import fs   from 'fs';

let router = express.Router();

router.get('/', pages.index);
router.get('/portfolio/:name', portfolio.index);
router.get('/portfolio/detail/:name', portfolio.detail);
router.get('/contact', pages.contact);

module.exports = router;