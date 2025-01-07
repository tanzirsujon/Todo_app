import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],

    },
    desc: {
        type: String,
        required: [true, 'desc is required'],

    },
    dueDate: {
        type: Date
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
},
    {
        timestamps: true,
    }
)

const todo = mongoose.model('Todo', todoSchema);
export default todo