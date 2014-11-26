// grab the mongoose module
var mongoose = require('mongoose');

// define our  drink model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('VideoReference', {
    video:    {type :   String, required : true},
    type:  {type :   String, required : true}
});
