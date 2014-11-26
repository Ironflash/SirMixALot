var mongoose = require('mongoose');

var entityReference = new mongoose.Schema({
    id : { type: String, required: true},
    text : { type: String, required: true }
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Action', {
    id	: {type : String, require : true},
    name : {type : String, require : true},
    languageBranch: {type : String, require : true},
    description	: {type : 	String, require : true},
    tool	: {type : 	mongoose.Schema.Types.ObjectId,ref:"entityReference", require : true}, //to tool
    videos	: {type : 	[mongoose.Schema.Types.ObjectId] , ref:"VideoReference", require : true}
});