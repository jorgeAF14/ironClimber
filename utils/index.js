const mongoose = require('mongoose')

const isAdmin = user => user.role=='admin'

module.exports={isAdmin}

