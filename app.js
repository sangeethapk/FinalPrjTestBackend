const express = require('express');
const Retaildata = require('./src/model/Retaildata');
const RetailCoursedata = require('./src/model/RetailCoursedata');
var nodemailer = require('nodemailer');

//const User = require('./src/model/user');
const cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.json());


app.post('/insert',function(req,res){
    console.log(req.body);
       
    var item=

    {
    name:req.body.applicant.name,
    phone:req.body.applicant.phone,
    email:req.body.applicant.email,
    employed:req.body.applicant.employed,
    highest_qualification:req.body.applicant.qualification,
    messsage:req.body.applicant.message,
    //downloaded:req.body.retail.downloaded

     }

 var retail=Retaildata(item);
 try{
 retail.save();
 sendConfirmationMail(item, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
 }
 catch(err){

    console.log(err+"not connected");
 }
});

app.get('/display',function(req,res){
    

    console.log("Inside display server");
    try{
    Retaildata.find()
                .then(function(data){
                    console.log(data);
                    res.send(data);
                   
                });
            }
            catch(err){
                console.log(err+"dispal...");
            }
});

//sent mail---------------------
const sendConfirmationMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "projectfsd711@gmail.com",
        pass: "ictakweb02@"
      }
    });

    const mailOptions = {
        from: `"ICTAK", "projectfsd711@gmail.com"`,
        to: `<${user.email}>`,
        subject: "Brochure download link",
        html: "<h3>Greetings from ICTAK</h3><p></p>"
      };
      
      transporter.sendMail(mailOptions, callback);
     
  }
  
 //End Send mail------------------------------------------- 

 app.post('/addRetailCourse',function(req,res){
  console.log(req.body.course.name+"Inside Server of addRetailcourse");
     
  var item=  {
  
  name:req.body.course.name,
  category:req.body.course.category,
  about:req.body.course.about,
  objective:req.body.course.objective,
  sponserimage:req.body.course.sponserimage,
  knowledgeParterimage:req.body.course.knowledgeParterimage,
  internshipPartnerimage:req.body.course.internshipPartnerimage,
  courseDelivery:req.body.course.courseDelivery,
  agenda:req.body.course.agenda,
  highlights:req.body.course.highlights,
  eligibility:req.body.course.eligibility,
  test:req.body.course.test,
  courseFee:req.body.course.courseFee,
  refundPolicy:req.body.course.refundPolicy,
  importantDates:req.body.course.importantDates,
  img1:req.body.course.img1,
  img2:req.body.course.img2,
  questionPaperLink:req.body.course.questionPaperLink,
  status:req.body.course.status
    

   }
console.log(item.name+"....inserted");
var retail=RetailCoursedata(item);
try{
retail.save();

}
catch(err){
  console.log("Cannot insert retail course data "+err);
}
 });
app.get('/getRetailCourseData',function(req,res){
    

  console.log("Inside display server");
  try{
  RetailCoursedata.find()
              .then(function(data){
                  console.log(data);
                  res.send(data);
                 
              });
          }
          catch(err){
              console.log(err+"dispal...");
          }
});




app.listen(3000, function(){
    console.log('listening to port 3000');
});