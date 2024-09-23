const express = require("express");
const jwt = require("jsonwebtoken");
const userSchemaModel = require("../schema/userSchemaCode");
const contactSchemaModel = require("../schema/contactSchemacode");
const verifyToken = require("../middleware/authMdl");

const userRouter = express.Router();

//api/users/register
userRouter.post('/register',async(req,res)=>{
    try {
        const user = await userSchemaModel.findOne({email:req.body.email});
        if (user) {
            return res.status(400).json({message: "User already exists"})
        }
        const newuserBody = req.body;
        const newUser = new userSchemaModel(newuserBody);

        const savedUser = await newUser.save();
        const token = jwt.sign(
            {userId:newUser.id},
            process.env.JWT_SECRET_KEY,{
                expiresIn:"1d"
            }
        );

        res.cookie("auth_token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV === "production",
            maxAge: 86400000,
        })

        res.sendStatus(200);
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error);
    }
})

userRouter.get('/getMe',verifyToken,async(req,res)=>{
    try {
        const userid = req.userId;
        const record = await userSchemaModel.findById(userid).select("-password");

        if (!record) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).json(record);
    } catch (error) {
        res.status(500).send(error);
    }
})

userRouter.post('/contact',async(req,res)=>{
    try {
        const newContactBody = req.body;
        const newContact = new contactSchemaModel(newContactBody);

        const savedContact = await newContact.save();
        res.status(200).send("success");
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error);
    }
})

userRouter.post('/enroll',verifyToken, async(req,res)=>{
    try {
        const course = req.body;
        const userid = req.userId;
        const record = await userSchemaModel.findById(userid).select("-password");

        if (!record) {
            return res.status(404).send({ message: 'User not found' });
        }

        record.courses.push(course);
        const savedRecord = await record.save();
        res.status(200).send("success");
    } catch (error) {
        res.status(500).send(error);
    }
})

// userRouter.put('/editMe',verifyToken,async(req,res)=>{
//     try {
//         const useridd = req.userIdd;
//         const newRecBody = req.body;
//         const updRec = await userSchemaModel.findByIdAndUpdate(
//             useridd,
//             newRecBody,
//             {new:true}
//         );

//         if (!updRec) return res.status(404).send();

//         res.status(200).json(updRec);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })




module.exports = userRouter;