const cors = require('cors')
let admin = require('./admin-route')
let test = require('./test-route')

let routes = (app) => {
    app.options('*', cors());

    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Headers', 
        'X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 
        'GET, POST, PUT, DELETE, OPTIONS');

        next()
    });

    try {
        admin(app)
        test(app)
    } catch (error) {
        console.log(error);
    }
}

module.exports = routes;