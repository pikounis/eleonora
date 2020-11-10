const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('combined'))

app.use('/addData', (request, response) => {
    // console.log(request.body);
    axios
        .post('https://email-api-koa.vercel.app/addData', {...request.body})
        .then(res => response.end(res.statusText)).catch(res => response.end(res.statusText));

})

module.exports = app;
