const express = require("express");
const verifyToken = require("../middleware/authMdl");
const userSchemaModel = require("../schema/userSchemaCode");
const courseRequestModel = require("../schema/courseRequestCode");
const supportSchemaModal = require("../schema/supportSchemaCode");

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

module.exports = adminRouter;