module.exports = app => {


//Base routes
app.use('/', require('./base.routes'))
app.use('/auth', require('./auth.routes')) 
app.use('/user',require('./user.routes'))
app.use('/places', require('./places.routes'))
app.use('/api', require('./api.routes'))

}
