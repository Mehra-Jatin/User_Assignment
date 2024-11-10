import express from 'express';
import { User } from '../db/dbConfig.js';

const userRoute = express.Router();

userRoute.get('/admin/bulk', async (req,res)=>{
    try{
        const allUser = await User.find();
        res.json(allUser);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
       
});

userRoute.put('/update/:id',async (req,res)=>{
        try{
          const userId = req.params.id;
          const data = req.body;
          
          const result = await User.updateOne({_id:userId},data);
          if(result){
            return res.status(500).send("Update successfully");
          }

        }   
        catch(err){
            return res.status(500).send(err.message);
        }  
});

userRoute.get('/about',async (req,res)=>{
         try{
          const id=req.query.id;
          const user= await User.findById(id);
          if(!user){
            return res.status(404).send("User not found");
        }
        res.json({user});
 
         }
         catch(err){
          return res.status(404).send(err.message);
         } 
});

export default userRoute;