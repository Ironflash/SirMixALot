// app/models/ingredient.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our  ingredient model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Ingredient', {
    name : {type : String, require : true},
    type : {type : String, require : true},
    subType: {type : String, require : true},
    row: {type : Number, require: true},
    col: {type : Number, require: true}
});