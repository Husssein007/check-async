const mongoose = require('mongoose')

    const connectdb = async()=>{

        try{
          await  mongoose.connect('mongodb+srv://husseinlimem8:lAs13O5OnrxOOqm2@cluster0.q7gmaoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            console.log('you are connected')
        }catch(err){
           console.log(err) 
        }
 
    }
    module.exports = connectdb 
