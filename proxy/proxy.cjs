const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const proxy = httpProxy.createProxyServer();

let userToken;

const targetUrl = 'http://localhost:8080/movies/getAll';

app.use(cors());
app.use(morgan('dev'));


axios.interceptors.request.use((config) => {
  userToken = config.headers.authorization;
  if (userToken) {
    config.headers.authorization = 'Bearer ' + userToken;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

app.use('/', (req, res) => {
  //res.set
  console.log('request headers:', req.headers);
  proxy.web(req, res, { target: targetUrl });
  console.log(res);
});

app.listen(3000, () => {
  console.log('started');
});
