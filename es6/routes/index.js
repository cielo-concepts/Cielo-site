'use strict';

import express    from 'express';
import pages      from './pages';
import fs   from 'fs';

let router = express.Router();

router.get('/', pages.index);

module.exports = router;