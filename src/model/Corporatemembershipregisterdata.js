const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ictak');
mongoose.connect("mongodb+srv://userone:userone@projectfiles.oottq.mongodb.net/ICTAKWEBINFO?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.'))
const Schema = mongoose.Schema;
const CorporatemembershipregisterSchema = new Schema({
    name: String,
    address: String,
    website: String,
    head: String,
    nature: String,  
    type: String,
    identity: String,
    gstn: String,
    dateofincorporation: String,
    cdname: String,
    phone: String,
    email: String,
    skillset: String,
    noofemployees: String,
    nooffreshers: String,
    noofpatents: String,
    experts: String,
    fresher: String,
    internship: String,
    training: String,
    capstone: String,
    message: String
});
var Corporatemembershipregisterdata = mongoose.model('corporatemembershipregisterdata',CorporatemembershipregisterSchema);
module.exports = Corporatemembershipregisterdata;