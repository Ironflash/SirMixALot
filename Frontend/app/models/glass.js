var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Glass', {
    id	: {type : String, require : true},
    name : {type : String, require : true},
    languageBranch: {type : String, require : true},
    description	: {type : 	String, require : true},
    videos	: {type : 	[mongoose.Schema.Types.ObjectId] , ref:"VideoReference", require : true}
});