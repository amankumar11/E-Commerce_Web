//Routes
const express = require('express')
// const passport = require("passport");
const User = require("../models/user");
// const isAuth = require("../middleware/auth")
// const LocalStrategy = require("passport-local").Strategy;
// const api_helper = require('../api-helper');
// const bcrypt = require("bcryptjs");
const router = new express.Router()



// passport.serializeUser((obj, done) => {
//   console.log("Serilializing User");
//   console.log(obj);
//   done(null, obj);
// });

// // * Passport deserializeUser
// passport.deserializeUser(async (obj, done) => {
//   console.log("Deserializing User");
//   done(null, obj);
// });


// passport.use('local-signin',new LocalStrategy({
//     usernameField: 'uid',
//     passwordField: 'password'
//   },
//   function(username, password, done) {
//     User.findOne({ uid: username }, (err, user) => {
//       if (err)  {return done(err);}
//       if (!user) return done(null, false,{ message: 'Incorrect Details.' });
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (err) throw err;
//         if (result === true) {
//           return done(null, user);
//         } else {
//           return done(null, false);
//         }
//       });
//     });
//   }
// ));





// router.post("/login/localUser", (req, res, next) => {
//     passport.authenticate("local-signin", (err, user, info) => {
//       if (err) throw err;
//       if (!user) res.status(400).send("No User Exists");
//       else {
//         req.logIn(user, (err) => {
//           if (err) throw err;
//           if(req.user)
//           {
//             res.status(200).send({message:"Successfully Authenticated",user:req.user});
//           }
//           else
//           {
//             res.status(400).send({message:"Incorrect Password"});
//           }
//         });
//       }
//     })(req, res, next);
//   });

router.post('/register', async (req, res) => {
  try {
    const { uid, name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already registered' });
    }

    const newUser = new User({
      uid,
      name,
      email,
      password, 
    });

    await newUser.save();

    res.status(201).json({ message: 'Successfully Registered', newUser });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
});


// router.post('/register', async (req, res) => {
//     try {
//       const { email } = req.body;
//       const user = await User.findOne({ email: email });
  
//       if (user) {
//         return res.status(400).json({ message: 'User already registered' });
//       }
  
//       // The rest of your code for processing and saving the new user
  
//       // Example:
//       // const newUser = new User(req.body);
//       // await newUser.save();
//       // res.status(201).json({ message: 'Successfully Registered', newUser });
//     } catch (err) {
//       res.status(500).json({ message: 'Internal server error', error: err.message });
//     }
//   });
  

    // router.get('/users/me', isAuth, async (req,res) => {
    //     res.send(req.user);
    // });

    // router.post('/users/logout', isAuth, async (req,res) => {
    //   try{
    //     req.logout();
    //     res.status(200).send("Logout Successful")
    //   }
    //   catch(e)
    //   {
    //     res.status(400).send(e);
    //   }
     
    // })

module.exports = router