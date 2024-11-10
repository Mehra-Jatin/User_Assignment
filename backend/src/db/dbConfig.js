import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jatin:1234@cluster0.xox4g.mongodb.net/Assignment");


const UserSchema = new mongoose.Schema({
    FirstName:  { type: String, required: true },
    LastName: { type: String, required: true },
    email:  { type: String, default:""},
    password:  { type: String, required: true },
    role: {type:String,default:"role"},
    password:  { type: String, required: true },
    phone:  { type: Number,  default:"" },
    country: { type: String, default:""},
    state:{ type: String, default:""},
    city:{ type: String, default:""},
    zip: { type: Number,  default:"" }
});

const User = mongoose.model('User', UserSchema);

export {User};