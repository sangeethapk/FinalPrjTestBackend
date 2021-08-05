const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ictak');
mongoose.connect("mongodb+srv://userone:userone@projectfiles.oottq.mongodb.net/ICTAKWEBINFO?retryWrites=true&w=majority")
.then (() => console.log ('MongoDB connected.'))
const Schema = mongoose.Schema;
const CorporatemembershipcontactusSchema = new Schema({
        name: String,
        email: String,
        message: String
});
var Corporatemembershipcontactusdata = mongoose.model('corporatemembershipcontactusdata',CorporatemembershipcontactusSchema);
module.exports = Corporatemembershipcontactusdata;