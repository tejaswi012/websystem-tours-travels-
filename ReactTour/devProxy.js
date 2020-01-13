const Bundler = require('parcel-bundler');
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
// Paths we want to forward to the app server
const forward = ['/tours', '/login', '/logout'];
app.use(forward, proxy({target: 'http://127.0.0.1:1711'}));
// Instance of the parcel.js bundler with start file
const bundler = new Bundler('./index.html');
app.use(bundler.middleware());
app.listen(1234);