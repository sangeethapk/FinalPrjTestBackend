const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ictak');
mongoose.connect("mongodb+srv://userone:userone@projectfiles.oottq.mongodb.net/ICTAKWEBINFO?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.'))
const Schema = mongoose.Schema;
const PartnerSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    firmname: String,
    address: String,  
    district: String,
    officespace: String,
    outcome: String,
    expectation: String,
    profile: String,
    noofemployees: String
});
var Partnerdata = mongoose.model('partnerdata',PartnerSchema);
module.exports = Partnerdata;