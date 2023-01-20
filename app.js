const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/meanstack'
const app = express()



var cors = require('cors')


app.use(cors())



mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection



con.on('open', () => {
    console.log("connected...")
});

app.use(express.json())
var loginRouter = require('./routes/login')
var cardRouter = require('./routes/cards')

app.use('/login',loginRouter)
app.use('/cards',cardRouter)


app.listen(5000, () => {
    console.log("srver started...")
});