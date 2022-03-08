var mongoose = require('mongoose');
var schema = mongoose.Schema;

let feedData = mongoose.Schema({
    title: { type:String, require: true},
    content: { type:String, require:true},
    link: { type:String, require:true},
    pubDate: {type:Date, require:true},
    guid: {type:String, require:true, unique:true}
})


let entry = mongoose.model('Entry', feedData);

module.exports = entry;