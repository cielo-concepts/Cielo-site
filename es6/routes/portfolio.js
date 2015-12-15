'use strict';

import express    from 'express';
import pages      from './pages';
import fs         from 'fs';
import data       from '../data/portfolio';

let router = express.Router();

let portfolio = {
	index: ((req, res) => {
    fs.readFile(__dirname + '/../../views/project-single.html', 'utf8', (err, text) => {
      res.send(text);
    })
  }),
	detail: ((req, res) => {
    let name = req.params.name;
    let portfolioDetail = data[name];
    console.log(portfolioDetail);
    res.json(portfolioDetail);
	})
};

module.exports = portfolio;