import todo from "../models/todoSchema.js";


async function todoHandler(req, res) {
    try {
        let { title, desc, dueDate } = req.body;
        let newTodo = new todo({
            title,
            desc,
            dueDate,
            createdBy: req.user._id
        })
        await newTodo.save();
        res.status(201).json({ "user": "insert succesfully" })
    } catch (error) {
        console.log(`got an error in signup ${error}`)

        if (error.name === 'ValidationError') {

            const errors = Object.values(error.errors).map((err) => err.message);

            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors, // List of all validation error messages
            });
        }
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}


export default todoHandler;