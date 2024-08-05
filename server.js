const express = require ('express')

const connect = require('./config/connectdb')
const app = express()


const port = 5000

connect()

app.use(express.json)


app.listen(port, (err)=>{
    err?console.log(err) : console.log(`Go to the port ${port}`)
})