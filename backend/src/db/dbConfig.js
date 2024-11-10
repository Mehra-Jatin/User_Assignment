import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jatin:1234@cluster0.xox4g.mongodb.net/Assignment");


const UserSchema = new mongoose.Schema({
    FirstName:  { type: String, required: true },
    LastName: { type: String, required: true },
    email:  { type: String,required: true},
    password:  { type: String, required: true },
    role: {type:String,default:"user"},
    phone:  { type: Number,  default:123456789 },
    country: { type: String, default:"xyz"},
    state:{ type: String, default:"xyz"},
    city:{ type: String, default:"xyz"},
    zip: { type: Number,  default:11111 }
});

const User = mongoose.model('User', UserSchema);

export {User};