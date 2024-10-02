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

module.exports = adminRouter;