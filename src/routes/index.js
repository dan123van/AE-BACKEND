let admin = require('./admin-route')

let routes = (app) => {
    try {
        admin(app)
    } catch (error) {
        console.log(error);
    }
}

module.exports = routes;