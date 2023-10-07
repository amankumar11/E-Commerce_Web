const express = require('express'); 
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express(); 
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://amankumar:plotlineassignment@cluster0.bhqeing.mongodb.net/'; 
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(mongoURI);

app.use(userRoutes);

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("App is listening on port "+ PORT)
	else
        console.log(error); 
	} 
); 
