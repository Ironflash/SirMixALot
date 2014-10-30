// app/models/drink.js
// grab the mongoose module
var mongoose = require('mongoose');

//ingredient schema
var ingredientSchema = new Schema({
    name : { type: String, require: true},
    amount : { type: Number, requre: true }
});
// define our  drink model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Drink', {
    name : {type : String, require : true},
    ingredients : {type : [ingredientSchema], require : true}
});