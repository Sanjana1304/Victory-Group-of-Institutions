const express = require("express");
const verifyToken = require("../middleware/authMdl");
const userSchemaModel = require("../schema/userSchemaCode");
const courseRequestModel = require("../schema/courseRequestCode");
const supportSchemaModal = require("../schema/supportSchemaCode");
const contactSchemaModel = require("../schema/contactSchemacode");

const adminRouter = express.Router();

adminRouter.get('/getAllStudents',verifyToken,async(req,res)=>{
    try {
        const users = await userSchemaModel.find({usertype:"student"});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

adminRouter.get('/getAllCourseRequests',verifyToken,async(req,res)=>{
    try {
        const requests = await courseRequestModel.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).send(error);
    }
})

adminRouter.get('/getAllStudentSupport',verifyToken,async(req,res)=>{
    try {
        const users = await supportSchemaModal.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

adminRouter.get('/getAllEnquiries',verifyToken,async(req,res)=>{
    try {
        const users = await contactSchemaModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

//fee payment status change
adminRouter.put('/markPaid',verifyToken,async(req,res)=>{
    try {
        const user = await userSchemaModel.findOne({email:req.body.email});
        const course = user.courses.id(req.body.courseId);
        course.hasPaid = true;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
})

//course status change to completed
adminRouter.put('/markCompleted',verifyToken,async(req,res)=>{
    try {
        const user = await userSchemaModel.findOne({email:req.body.email});
        const course = user.courses.id(req.body.courseId);
        course.courseStatus = 'Completed';
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
})

//remove a student from the database
adminRouter.delete('/removeStudent/:id', verifyToken, async (req, res) => {
    const id = req.params.id;
    try {
      const user = await userSchemaModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await userSchemaModel.deleteOne({ _id: id });
      res.status(200).json({ message: 'User removed successfully' });
    } catch (error) {
      console.error('Error removing user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  

//enroll a student with a course using student id and course details
adminRouter.post('/enrollStud',verifyToken,async(req,res)=>{
    try {
        const {studId,courseName,courseDescription,coursePrice,courseRegDate,courseEnrollDate,courseDuration,courseInstructor,courseStatus,courseType} = req.body;
        const user = await userSchemaModel.findById(studId);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        user.courses.push({courseName,courseDescription,coursePrice,courseRegDate,courseEnrollDate,courseDuration,courseInstructor,courseStatus,courseType});
        await user.save();
        res.status(200).send("success");
    } catch (error) {
        res.status(500).send(error);
    }   
})

//modify requestStatus to Accepted and modify fee array of course_request collection which has a default value of [0,0,0] for a particular document based on email
adminRouter.put('/acceptRequest',verifyToken,async(req,res)=>{
    try {
        const request = await courseRequestModel.findById(req.body.id);
        request.requestStatus = 'Accepted';
        request.feeProposed = req.body.fees;
        await request.save();
        res.status(200).json(request);
    } catch (error) {
        res.status(500).send(error);
    }
})

//modify requestStatus to Rejected with reason for a particular document based on email
adminRouter.put('/rejectRequest',verifyToken,async(req,res)=>{
    try {
        const request = await courseRequestModel.findById(req.body.id);
        request.requestStatus = 'Rejected';
        request.rejectReason = req.body.rejectReason;
        await request.save();
        res.status(200).json(request);
    } catch (error) {
        res.status(500).send(error);
    }
})

//close ticket by changing status to resolved for a particular document based on id of the document in support collection
adminRouter.put('/closeTicket/:id',verifyToken,async(req,res)=>{
    const id = req.params.id;
    try {
        const ticket = await supportSchemaModal.findById(id);
        ticket.status = 'resolved';
        await ticket.save();
        res.status(200).json({ message: 'Ticket closed successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
})

//close enquiry by changing status to resolved for a particular document based on id of the document in enquiries collection
adminRouter.put('/closeEnquiry/:id',verifyToken,async(req,res)=>{
    const id = req.params.id;
    try {
        const enquiry = await contactSchemaModel.findById(id);
        enquiry.status = 'resolved';
        await enquiry.save();
        res.status(200).json({ message: 'Enquiry closed successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
})

//total revenue calculation based on the fees paid by students
adminRouter.get('/getTotalRevenue',verifyToken,async(req,res)=>{
    try {
        const users = await userSchemaModel.find();
        let total = 0;
        users.forEach(user => {
            user.courses.forEach(course => {
                if(course.hasPaid){
                    total += course.coursePrice;
                }
            })
        })
        res.status(200).json({total});
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = adminRouter;