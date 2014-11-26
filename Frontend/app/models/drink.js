// app/models/drink.js
// grab the mongoose module
var mongoose = require('mongoose');

//mongoimport --db sir_mix_a_lot --collection drink-import --type json --file drinks4.json --jsonArray

//ingredient schema
//var ingredientSchema = new mongoose.Schema({
//    name : { type: String, required: true},
//    amount : { type: Number, required: true }
//});

var entityReference = new mongoose.Schema({
    id : { type: String, required: true},
    text : { type: String, required: true }
});

// define our  drink model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Drink', {
    //name : {type : String, required : true},
    //ingredients : {type : [ingredientSchema], required: false}
    id	: {type :	String, required : true},
    name: {type :	String, required : true},
    description	: {type :	String, required : true},
    descriptionPlain: {type :	String, required : true},
    story: {type :	String, required : false},
    color: {type :	String, required : false},
    languageBranch: {type :	String, required : true},
    rating: {type :	Number, required : false},
    skill: {type :	[String], required : true},
    video: {type : [mongoose.Schema.Types.ObjectId], ref: "VideoReference", required : false},
    isAlcoholic: {type :	Boolean, required : true},
    isCarbonated: {type :	Boolean, required : true},
    isHot: {type :	Boolean, required : true},
    servedIn: {type :	mongoose.Schema.Types.ObjectId, ref: "entityReference", required : true}, //to glass
    ingredients: {type : [mongoose.Schema.Types.ObjectId], ref: "Ingredient", required : true},
    tastes: {type : mongoose.Schema.Types.ObjectId, ref: "entityReference", required : false}, //to taste
    occasions: {type :	[entityReference], required : true}, //to occasion
    tools: {type : [entityReference], required : true}, // to tool
    drinkTypes: {type :	[entityReference], required : true}, //to drink type
    actions: {type :	[entityReference], required : true}, // to action
    brands: {type :	[String], required : false},
    tags: {type :	[mongoose.Schema.Types.ObjectId], ref: "Tag", required : false}
});