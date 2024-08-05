const mongoose = require('mongoose')



const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    favoriteFoods: {
        type: [String]  // Array of strings
    }
});



module.exports = mongoose.model('personhussein',personSchema)