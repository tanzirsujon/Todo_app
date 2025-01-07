import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();


const secretKey = process.env.JWT_KEY;
export function setUserAuth(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        username: user.username,
    }, secretKey)
}
export function getUserAuth(token) {
    return jwt.verify(token, secretKey);
}