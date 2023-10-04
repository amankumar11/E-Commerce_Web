const express = require('express'); 
const mongoose = require('mongoose');

const app = express(); 
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://amankumar:plotlineassignment@cluster0.bhqeing.mongodb.net/'; 
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
});

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("App is listening on port "+ PORT) 
	else
        console.log(error); 
	} 
); 
