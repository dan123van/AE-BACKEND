'use strict'

const router = (app) => {

    app.get('/admin', function (req, res) {
        console.log(`Ya estoy en mi ruta GET ${req.params}`)
        res.send('Hello World')
    })

    app.post('/admin', function (req, res) {
        console.log(`Ya estoy en mi ruta POST ${req.body}`)
        res.send('Hello World')
    })

}

module.exports = router;
