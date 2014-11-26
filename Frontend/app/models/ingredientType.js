var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('IngredientType', {
    type	: {type : String, require : true}
});