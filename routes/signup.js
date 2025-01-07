import express from 'express'
import { signupHandler } from '../controllers/logInSignup.js';
const signupRouter = express.Router();
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

signupRouter.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'views', 'signup.html'))
})
signupRouter.post('/', signupHandler);

export default signupRouter;