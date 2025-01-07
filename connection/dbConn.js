import mongoose from "mongoose";

async function conn(db) {
    try {
        await mongoose.connect(db);
        console.log('db is connected')
    } catch (error) {
        console.log(`there is error when connecting db ${error}`)
    }
}

export default conn;