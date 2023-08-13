// imports
const express = require('express');
var vhost = require('vhost');

// default variables
const port = 3000;

// init app
const app = express();
app.use(express.json());

// configure router
const api = require('./router/api');
app.use(vhost('api.refilc.hu', api.app));
app.use(vhost('api.refilcapp.hu', api.app));

// listen on default port
app.listen(port, () => {
    console.log(`reFilc API started on port ${port}`);
});