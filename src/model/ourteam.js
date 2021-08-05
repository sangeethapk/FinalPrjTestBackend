const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@projectfiles.oottq.mongodb.net/ICTAKWEBINFO?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.')) 
 
const Schema = mongoose.Schema;
 
var NewMemberSchema = new Schema({
    name : String,
    designation:String,
    imageUrl :{ type:String, default:"https://images.app.goo.gl/anZ62Yq8GjwuLLze6" },
    about : String,
 
});
 
var MemberData = mongoose.model('membersdata', NewMemberSchema);                   
 
module.exports = MemberData;
