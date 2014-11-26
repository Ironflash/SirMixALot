// app/models/tag.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our  drink model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Tag', {
    name: {type :	String, required : true},
    owner: {type :	String, required : true},
    count: {type :	Number, required : true}
});