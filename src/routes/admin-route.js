'use strict'

const router = (app) => {

    app.post('/admin', function (req, res) {
        console.log(`Ya estoy en mi ruta POST ${req.body}`)
        res.send('Post de admins')
    })

    app.get('/admin/:id', function (req, res) {
        console.log(`Ya estoy en mi ruta GET ${req.params.id}`)
        res.send('Get de admins')
    })

    app.put('/admin', function (req, res) {
        console.log(`Estoy en una modificacion`)
        res.send('Get de admins')
    })

    app.delete('/admin', function (req, res) {
        console.log(`Estoy en una seccion`)
        res.send('Get de admins')
    })

}

module.exports = router;
