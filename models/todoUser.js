import mongoose from "mongoose";


const todoUserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true,
        match: [/^[a-zA-Z0-9_]{3,20}$/, 'Username must be 3-20 characters long and can only contain letters, numbers, and underscores'],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
        type: String,

        required: [true, "Password is required"],
    },

}, {
    timestamps: true,

})

let todoUser = new mongoose.model("User", todoUserSchema);
export default todoUser;