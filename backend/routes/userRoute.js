const express = require("express");
const jwt = require("jsonwebtoken");
const userSchemaModel = require("../schema/userSchemaCode");
const contactSchemaModel = require("../schema/contactSchemacode");
const verifyToken = require("../middleware/authMdl");
const courseRequestModel = require("../schema/courseRequestCode");
const supportSchemaModal = require("../schema/supportSchemaCode");

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

userRouter.put('/education',verifyToken,async(req,res)=>{
    try {
        const useridd = req.userId;
        const newEduBody = req.body;
        const updRec = await userSchemaModel.findByIdAndUpdate(
            useridd,
            {education:newEduBody},
            {new:true}
        );

        if (!updRec) return res.status(404).send();

        res.status(200).json(updRec);
    } catch (error) {
        res.status(500).send(error);
    }
})

userRouter.put('/experience',verifyToken,async(req,res)=>{
    try {
        const useridd = req.userId;
        const newExpBody = req.body;
        const updRec = await userSchemaModel.findByIdAndUpdate(
            useridd,
            {experience:newExpBody},
            {new:true}
        );

        if (!updRec) return res.status(404).send();

        res.status(200).json(updRec);
    } catch (error) {
        res.status(500).send(error);
    }
})

userRouter.put('/feedback', verifyToken, async (req, res) => {
    try {
        const userId = req.userId;
        const { courseId, feedback } = req.body; // Assuming courseId is passed along with feedback

        // Find the user and update the course feedback for the matching course
        const updRec = await userSchemaModel.findOneAndUpdate(
            { _id: userId, "courses._id": courseId }, // Match user and specific course by course ID
            { $set: { "courses.$.courseFeedback": feedback } }, // Update feedback for the matched course
            { new: true } // Return the updated document
        );

        if (!updRec) return res.status(404).send({ message: "User or course not found" });

        res.status(200).json(updRec);
    } catch (error) {
        res.status(500).send(error);
    }
});

userRouter.get('/testimonials', async (req, res) => {
    try {
        // Fetch only users that have courses with feedback
        const usersWithFeedback = await userSchemaModel.find(
            { "courses.courseFeedback": { $exists: true, $ne: "" } }, // Feedback should exist and not be an empty string
            { name: 1, courses: 1 } // Fetch user's name and courses array
        );

        // Prepare an array to hold testimonials
        const testimonials = [];

        // Loop through users to extract feedback
        usersWithFeedback.forEach(user => {
            user.courses.forEach(course => {
                if (course.courseFeedback && course.courseFeedback.trim() !== "") { // Ensure feedback is not empty or blank
                    testimonials.push({
                        name: user.name,
                        courseName: course.courseName,
                        feedback: course.courseFeedback
                    });
                }
            });
        });

        // Return 404 if no testimonials found
        if (!testimonials.length) {
            return res.status(404).send({ message: "No feedback found" });
        }

        // Return the testimonials in response
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).send({ message: "Error retrieving testimonials", error });
    }
});




userRouter.post('/craft',verifyToken,async(req,res)=>{
    try {
        const newcraftBody = req.body;
        const newCraft = new courseRequestModel(newcraftBody);

        const savedCraft = await newCraft.save();
        res.status(200).send("success");
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error);
    }
})

userRouter.post('/support',verifyToken,async(req,res)=>{
    try {
        const newSupportBody = req.body;
        const newSupport = new supportSchemaModal(newSupportBody);

        const savedSupport = await newSupport.save();
        res.status(200).send("success");
    } catch (error) {
        console.log(error.message);
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