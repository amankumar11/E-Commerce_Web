// const express = require('express');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/user');

// const app = express();
// const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://amankumar:plotlineassignment@cluster0.bhqeing.mongodb.net/';
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// mongoose.connect(mongoURI);

// app.use(userRoutes);

// app.listen(PORT, (error) =>{
// 	if(!error)
// 		console.log("App is listening on port "+ PORT)
// 	else
//         console.log(error);
// 	}
// );

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// const workoutRoutes = require('./routes/workouts')
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
// app.use('/api/workouts', workoutRoutes)
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
