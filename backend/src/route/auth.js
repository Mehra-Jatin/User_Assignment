import express from 'express';
import { User } from '../db/dbConfig.js';
const authRouter = express.Router();

authRouter.post('/signup',async (req, res) => {
     try{
            const existingUser = await User.findOne({email: req.body.email});
            if(existingUser){
                return res.status(400).send("User already exists");
            }

          const response=  await User.create({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                phone: req.body.phone,
                country: req.body.country,
                state: req.body.state,
                city: req.body.city,
                zip: req.body.zip
            });
            return res.status(200).send({id:response._id});
     }
        catch(err){
           
            return res.status(500).send(err.message);
        }
});


authRouter.post('/signin',async (req, res) => {
          try{
          const {email,password} =req.body;
          const user =await  User.findOne({email}); 
          if (!user || user.password !== password) {
            return res.status(400).send({ error: "Invalid Credentials" });
          }     
           return res.status(200).send({id:user._id});
          }
          catch(err){
            return res.status(500).send(err.message);
          }
});

export default authRouter;
