import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jatin:1234@cluster0.xox4g.mongodb.net/Assignment");


const UserSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    email: String,
    password: String,
    role: String,
    password: String,
    phone: Number,
    country: String,
    state: String,
    city: String,
    zip: Number
});

const User = mongoose.model('User', UserSchema);

export {User};