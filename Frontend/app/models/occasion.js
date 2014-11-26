var mongoose = require('mongoose');

var discreteDateTime = new mongoose.Schema({
    month	: {type : Number, require : true},
    day	: {type : Number, require : true},
    weekDay	: {type : Number, require : true},
    hour	: {type : Number, require : true}
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Occasion', {
    id	: {type : String, require : true},
    name : {type : String, require : true},
    languageBranch: {type : String, require : true},
    description	: {type : 	String, require : true},
    start	: {type : 	mongoose.Schema.Types.ObjectId, ref:"discreteDateTime", require : true},
    end	: {type : 	mongoose.Schema.Types.ObjectId, ref:"discreteDateTime", require : true}
});