const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/ictak")
// .then (() => console.log ('MongoDB connected.'))
 mongoose.connect("mongodb+srv://userone:userone@projectfiles.oottq.mongodb.net/ICTAKWEBINFO?retryWrites=true&w=majority")
 .then (() => console.log ('MongoDB connected.')) 

   


const Schema=mongoose.Schema;
const InstitutionalSchema=new Schema({
    submittedDate:{ type:Date, default:Date.now },
    name:String,
    phone:String,
    email:String,
    employed:String,
    highest_qualification:String,
    messsage:String,
    
});

var InstitutionalApplicant=mongoose.model('institutional-applicant',InstitutionalSchema);
module.exports=InstitutionalApplicant;