const express = require ('express')
const personRoute = require ('./routes/personRoute')
const connect = require('./config/connectdb')
const app = express()


const port = 5000

connect()

app.use(express.json)

app.use('/person',personRoute)


app.listen(port, (err)=>{
    err?console.log(err) : console.log(`Go to the port ${port}`)
})