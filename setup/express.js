let setup = (app, db) => {
    require('../src/routes/index')(app, db)
}

module.exports = setup;