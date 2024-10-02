const express = require("express");
const verifyToken = require("../middleware/authMdl");
const userSchemaModel = require("../schema/userSchemaCode");

const adminRouter = express.Router();

adminRouter.get('/getAllStudents',verifyToken,async(req,res)=>{
    try {
        const users = await userSchemaModel.find({usertype:"student"});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = adminRouter;