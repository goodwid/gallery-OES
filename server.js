const express = require('express');
const esr = require('express-spa-router');

const app = module.exports = express();
app.use(esr(app, {extraRoutes: ['slideshow', 'about']}));
app.use(express.static(__dirname+'/public'));
