// app/models/drink.js
// grab the mongoose module
var mongoose = require('mongoose');

//ingredient schema
var ingredientSchema = new mongoose.Schema({
    name : { type: String, required: true},
    amount : { type: Number, required: true }
});
// define our  drink model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Drink', {
    name : {type : String, required : true},
    ingredients : {type : [ingredientSchema], required: false}
});