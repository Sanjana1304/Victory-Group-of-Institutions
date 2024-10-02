require('dotenv').config();
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
//const bodyParser = require("body-parser");
const express = require('express');
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const verifyToken = require("./middleware/authMdl");
const adminRouter = require('./routes/adminRoute');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//
// app.use(
//     cors({
//         origin : process.env.FRONTEND_URL ,
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type', 'Authorization'],
//         credentials : true,
//     })
// )

const allowedOrigins = ['http://localhost:5173', process.env.FRONTEND_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  poolSize: 10,  // Limits the number of concurrent connections in the pool
})
.then(() => {
  console.log('MongoDB connected successfully hehe');
})
.catch(err => {
  console.error('Ayo Error connecting to MongoDB:', err);
});

// Define a route
app.get('/', (req, res) => {
    res.send('Hello,Sanj from the backend !!');
});

app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/admin",adminRouter);

app.get('/protectedRoute', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app shutdown");
  process.exit(0);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;