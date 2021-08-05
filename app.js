const express = require('express');
const Retaildata = require('./src/model/Retaildata');
const CorporateRequestdata=require('./src/model/CorporateRequestData');
const InstitutionalRequestdata=require('./src/model/InstitutionalRequest');
const RetailCoursedata = require('./src/model/RetailCoursedata');
const InstitutionalCoursedata = require('./src/model/InstitutionalCoursedata');
const CorporateCoursedata = require('./src/model/CorporateCoursedata');
const MemberData =require('./src/model/ourteam');
const CorporatemembershipcontactusData = require('./src/model/Corporatemembershipcontactusdata');
const PartnerData = require('./src/model/Partnershipdata');
const CorporatemembershipregisterData = require('./src/model/Corporatemembershipregisterdata');
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
    messsage:req.body.applicant.messsage,
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
                    console.log("Retail request:"+data);
                    res.send(data);
                   
                });
            }
            catch(err){
                console.log(err+"dispal...");
            }
});
app.post('/insertInstitutionalRequest',function(req,res){
  console.log(req.body);
     
  var item=

  {
  name:req.body.applicant.name,
  phone:req.body.applicant.phone,
  email:req.body.applicant.email,
  employed:req.body.applicant.employed,
  highest_qualification:req.body.applicant.qualification,
  messsage:req.body.applicant.messsage,
  //downloaded:req.body.retail.downloaded

   }


try{
var instituional=InstitutionalRequestdata(item);
instituional.save();
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

app.get('/displayInstitutionalRequest',function(req,res){
  

  console.log("Inside display server");
  try{
    InstitutionalRequestdata.find()
              .then(function(data){
                  console.log(data);
                  res.send(data);
                 
              });
          }
          catch(err){
              console.log(err+"dispal...");
          }
});




app.post('/insertCorporateRequest',function(req,res){
  console.log(req.body);
     
  var item=

  {
  name:req.body.applicant.name,
  phone:req.body.applicant.phone,
  email:req.body.applicant.email,
  employed:req.body.applicant.employed,
  highest_qualification:req.body.applicant.qualification,
  messsage:req.body.applicant.messsage,
  //downloaded:req.body.retail.downloaded

   }


try{
var corporate=CorporateRequestdata(item);
corporate.save();
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

app.get('/displayCorporateRequest',function(req,res){
  

  console.log("Inside display server");
  try{
    CorporateRequestdata.find()
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
  age:req.body.course.age,
  test:req.body.course.test,
  courseFee:req.body.course.courseFee,
  refundPolicy:req.body.course.refundPolicy,
  importantDates:req.body.course.importantDates,
  img1:req.body.course.img1,
  img2:req.body.course.img2,
  questionPaperLink:req.body.course.questionPaperLink,
  status:req.body.course.status,
  brochureTitle:req.body.course.brochureTitle
    

   }

//------------Check for the catogery-----------



  console.log(item.name+"....inserted");
  var retail=RetailCoursedata(item);
  try{
  retail.save();
  
  }
  catch(err){
    console.log("Cannot insert retail course data "+err);
  }
 });


//Add Institutional Courses


app.post('/addInstitutionalCourse',function(req,res){
  console.log(req.body.course.name+"Inside Server of addInstitutionalcourse");
     
  var item=  {
  
  name:req.body.course.name,

  about:req.body.course.about,
  objective:req.body.course.objective,
  sponserimage:req.body.course.sponserimage,
  knowledgeParterimage:req.body.course.knowledgeParterimage,
  internshipPartnerimage:req.body.course.internshipPartnerimage,
  courseDelivery:req.body.course.courseDelivery,
  agenda:req.body.course.agenda,
  highlights:req.body.course.highlights,
  eligibility:req.body.course.eligibility,
  age:req.body.course.age,
  test:req.body.course.test,
  courseFee:req.body.course.courseFee,
  refundPolicy:req.body.course.refundPolicy,
  importantDates:req.body.course.importantDates,
  img1:req.body.course.img1,
  img2:req.body.course.img2,
  questionPaperLink:req.body.course.questionPaperLink,
  status:req.body.course.status,
  brochureTitle:req.body.course.brochureTitle
    

   }

//------------Check for the catogery-----------



  console.log(item.name+"....inserted");
  var retail=InstitutionalCoursedata(item);
  try{
  retail.save();
  
  }
  catch(err){
    console.log("Cannot insert institutional course data "+err);
  }
 });



 //----------------------------End---------------------------------------

 app.post('/addCorporateCourse',function(req,res){
  console.log(req.body.course.name+"Inside Server of addInstitutionalcourse");
     
  var item=  {
  
  name:req.body.course.name,

  about:req.body.course.about,
  objective:req.body.course.objective,
  sponserimage:req.body.course.sponserimage,
  knowledgeParterimage:req.body.course.knowledgeParterimage,
  internshipPartnerimage:req.body.course.internshipPartnerimage,
  courseDelivery:req.body.course.courseDelivery,
  agenda:req.body.course.agenda,
  highlights:req.body.course.highlights,
  eligibility:req.body.course.eligibility,
  age:req.body.course.age,
  test:req.body.course.test,
  courseFee:req.body.course.courseFee,
  refundPolicy:req.body.course.refundPolicy,
  importantDates:req.body.course.importantDates,
  img1:req.body.course.img1,
  img2:req.body.course.img2,
  questionPaperLink:req.body.course.questionPaperLink,
  status:req.body.course.status,
  brochureTitle:req.body.course.brochureTitle
    

   }

//------------Check for the catogery-----------



  console.log(item.name+"....inserted");
  var retail=CorporateCoursedata(item);
  try{
  retail.save();
  
  }
  catch(err){
    console.log("Cannot insert corporate course data "+err);
  }
 });



 //---------------Get Retail data----------------------------------------
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
//________________________________End___________________________________________
//--------------------------------Start get Institutional data-----------------
app.get('/getInstitutionalCourseData',function(req,res){
    

  console.log("Inside display server");
  try{
  InstitutionalCoursedata.find()
              .then(function(data){
                  console.log(data);
                  res.send(data);
                 
              });
          }
          catch(err){
              console.log(err+"dispal...");
          }
});
//_______________________________________________________________________________________
//--------------------------------Start get Corporate data-----------------
app.get('/getCorporateCourseData',function(req,res){
    

  console.log("Inside display server");
  try{
  CorporateCoursedata.find()
              .then(function(data){
                  console.log(data);
                  res.send(data);
                 
              });
          }
          catch(err){
              console.log(err+"dispal...");
          }
});
//______________________________End_____________________________________



// -----------------------------get single course details-------------


app.get('/getRetailCourseDetails/:name',  (req, res) => {

  console.log("Inside Single Course Details :"+req.params.name);
  const name = req.params.name;
  RetailCoursedata.findOne({"name":name})
  .then((course)=>{
    console.log("Single Course Details :"+course.name+"---"+course);
      res.send(course);
  });
})



app.get('/getInstitutionalCourseDetails/:name',  (req, res) => {

  console.log("Inside Single Course Details :");
  const name = req.params.name;
  InstitutionalCoursedata.findOne({"name":name})
  .then((course)=>{
    console.log("Single Course Details :"+course.name+"---"+course);
      res.send(course);
  });
})



app.get('/getCorporateCourseDetails/:name',  (req, res) => {

  console.log("Inside Single Course Details :");
  const name = req.params.name;
  CorporateCoursedata.findOne({"name":name})
  .then((course)=>{
    console.log("Single Course Details :"+course.name+"---"+course);
      res.send(course);
  });
})
//----------------------------Delete and Update of courses----------

app.delete("/retailcourse/:name",(req, res) => {

  let name = req.params.name;
  RetailCoursedata.findOneAndDelete({"name":name})
  .then(()=>{
      console.log('success')
      res.send();
  })
});

  app.delete("/institutional/course/:name",(req, res) => {
   let name = req.params.name;
    InstitutionalCoursedata.findOneAndDelete({"name":name})
    .then(()=>{
        console.log('success')
        res.send();
    })

  })
  app.delete("/corporate/course/:name",(req, res) => {

   let name = req.params.name;
    CorporateCoursedata.findOneAndDelete({"name":name})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

  //-----------------------Update------------------------------------------

  app.put('/retailcourseupdate/:name',(req,res)=>{
    console.log("Hello inside put"+req.body.name +"   o"+req.params.name)
    var item=  {
  
      name:req.body.name,
      category:req.body.category,
      about:req.body.about,
      objective:req.body.objective,
      sponserimage:req.body.sponserimage,
      knowledgeParterimage:req.body.knowledgeParterimage,
      internshipPartnerimage:req.body.internshipPartnerimage,
      courseDelivery:req.body.courseDelivery,
      agenda:req.body.agenda,
      highlights:req.body.highlights,
      eligibility:req.body.eligibility,
      age:req.body.age,
      test:req.body.test,
      courseFee:req.body.courseFee,
      refundPolicy:req.body.refundPolicy,
      importantDates:req.body.importantDates,
      img1:req.body.img1,
      img2:req.body.img2,
      questionPaperLink:req.body.questionPaperLink,
      status:req.body.status,
      brochureTitle:req.body.brochureTitle
        
    
       }
    
   RetailCoursedata.findOneAndUpdate({"name":req.params.name},item)
   .then(function(){
      res.send();
  });
})





app.put('/corporatecourseupdate/:name',(req,res)=>{
  console.log("Hello inside put"+req.body.name +"   o"+req.params.name)
  var item=  {

    name:req.body.name,
  
    about:req.body.about,
    objective:req.body.objective,
    sponserimage:req.body.sponserimage,
    knowledgeParterimage:req.body.knowledgeParterimage,
    internshipPartnerimage:req.body.internshipPartnerimage,
    courseDelivery:req.body.courseDelivery,
    agenda:req.body.agenda,
    highlights:req.body.highlights,
    eligibility:req.body.eligibility,
    age:req.body.age,
    test:req.body.test,
    courseFee:req.body.courseFee,
    refundPolicy:req.body.refundPolicy,
    importantDates:req.body.importantDates,
    img1:req.body.img1,
    img2:req.body.img2,
    questionPaperLink:req.body.questionPaperLink,
    status:req.body.status,
    brochureTitle:req.body.brochureTitle
      
  
     }
  
 CorporateCoursedata.findOneAndUpdate({"name":req.params.name},item)
 .then(function(){
    res.send();
});
})



app.put('/institutionalcourseupdate/:name',(req,res)=>{
  console.log("Hello inside put :"+req.body.name +"   o "+req.params.name)
  var update=  {
    name:req.body.name,  
    about:req.body.about,
    objective:req.body.objective,
    sponserimage:req.body.sponserimage,
    knowledgeParterimage:req.body.knowledgeParterimage,
    internshipPartnerimage:req.body.internshipPartnerimage,
    courseDelivery:req.body.courseDelivery,
    agenda:req.body.agenda,
    highlights:req.body.highlights,
    eligibility:req.body.eligibility,
    age:req.body.age,
    test:req.body.test,
    courseFee:req.body.courseFee,
    refundPolicy:req.body.refundPolicy,
    importantDates:req.body.importantDates,
    img1:req.body.img1,
    img2:req.body.img2,
    questionPaperLink:req.body.questionPaperLink,
    status:req.body.status,
    brochureTitle:req.body.brochureTitle
      
  
     }
  
 InstitutionalCoursedata.findOneAndUpdate({"name":req.params.name},update)
 .then(function(){
    res.send();
});
})


// -------------------------Member---------------------------------------------------

app.get('/about',function(req,res){
  console.log("Inside display server");
  try{
  MemberData.find()
              .then(function(membersdatas){
                  console.log(membersdatas);
                  res.send(membersdatas);
                 
              });
          }
          catch(err){
              console.log(err+"dispal...");
          }
});
//______________________________End_____________________________________

app.post('/addmember',function(req,res){
  console.log(req.body);
     
  var team=  {
  
  name:req.body.team.name,
  about:req.body.team.about,
  imageUrl:req.body.team.imageUrl,
  designation:req.body.team.designation,
 
   }
   var team = new MemberData(team);
   team.save();
});
//______________________________End_____________________________________

//--------------------------------Delete team member data-----------------
app.delete("/removemember/:name",(req, res) => {
 
  let name = req.params.name;
  MemberData.findOneAndDelete({"name":name})
  .then(()=>{
      console.log('success')
      res.send();
  })
});
 
//______________________________End_____________________________________
//--------------------------------update team member data-----------------
app.put('/updatemember/:name',(req,res)=>{
  
  var team=  {
 
    name:req.body.team.name,
  about:req.body.team.about,
  imageUrl:req.body.team.imageUrl,
  designation:req.body.team.designation,
 
     }
     MemberData.findOneAndUpdate({"name":req.params.name},team)
 .then(function(){
    res.send();
});
})

// --------------------------------------End----------------------------------------


//----------------------------------------------------PArtnership membership--------

app.post('/insertContactus',function(req,res){
   
  console.log(req.body);
 
  var contactus = {       
      name : req.body.contactus.name,
      email : req.body.contactus.email,
      msg : req.body.contactus.message
 }       
 var contactus = new CorporatemembershipcontactusData(contactus);
 contactus.save();
});


app.post('/insertpartner',function(req,res){
   
  console.log(req.body);
 
  var partner = {       
      name : req.body.partner.name,
      email : req.body.partner.email,
      phone : req.body.partner.phone,
      firmname : req.body.partner.firmname,
      address : req.body.partner.address,
      district : req.body.partner.district,
      officespace : req.body.partner.officespace,
      outcome : req.body.partner.outcome,
      expectation : req.body.partner.expectation,
      profile : req.body.partner.profile,
      noofemployees : req.body.partner.noofemployees
 }       
 var partner = new PartnerData(partner);
 //partner.save();
 try{
  partner.save();
  sendConfirmationMail(partner, (err, info) => {
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

app.post('/insertcorporatemember',function(req,res){
 
  console.log(req.body);
 
  var corporatemember = {       
      name : req.body.corporatemember.name,
      address : req.body.corporatemember.address,
      website : req.body.corporatemember.website,
      head : req.body.corporatemember.head,
      nature : req.body.corporatemember.nature,
      type : req.body.corporatemember.type,
      identity : req.body.corporatemember.identity,
      gstn : req.body.corporatemember.gstn,
      dateofincorporation : req.body.corporatemember.dateofincorporation,
      cdname : req.body.corporatemember.cdname,
      phone : req.body.corporatemember.phone,
      email : req.body.corporatemember.email,
      skillset : req.body.corporatemember.skillset,
      noofemployees : req.body.corporatemember.noofemployees,
      nooffreshers : req.body.corporatemember.nooffreshers,
      noofpatents : req.body.corporatemember.noofpatents,
      experts : req.body.corporatemember.experts,
      fresher : req.body.corporatemember.fresher,
      internship : req.body.corporatemember.internship,
      training : req.body.corporatemember.training,
      capstone : req.body.corporatemember.capstone,
      message : req.body.corporatemember.message
 }       
 var corporatemember = new CorporatemembershipregisterData(corporatemember);
 //corporatemember.save();
 try{
  corporatemember.save();
  sendConfirmationMail(corporatemember, (err, info) => {
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




//--------------------------------------End-------------------------------------------
app.listen(3000, function(){
    console.log('listening to port 3000');
});