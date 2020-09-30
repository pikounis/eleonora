const axios = require('axios');
const bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use('/addData', (request, response) => {
        // console.log(request.body);
        axios
            .post('http://localhost:3031/addData', {...request.body})
            .then(res => response.end(res.statusText)).catch(res => response.end(res.statusText));

    })
}