'use strict'

const router = (app) => {

    app.post('/test', function (req, res) {
        let data = req.body
        res.send({ message: 'El post ya recibe el body', data: data })
    })

    app.get('/test', function (req, res) {
        console.log(`Ya estoy en mi ruta GET con Query params`, req.query)
        res.send('Get de tests')
    })

    app.get('/test/:id', function (req, res) {
        console.log(`Ya estoy en mi ruta GET con path parameters`, req.params)
        res.send('Get de tests')
    })

    app.put('/test/:id', function (req, res) {
        let data = req.body
        res.send({ message: 'El put ya recibe el body', data: data })
    })

    app.delete('/test/:id', function (req, res) {
        let data = req.body
        res.send({ message: 'El delete ya recibe el body', data: data })
    })

}

module.exports = router;
