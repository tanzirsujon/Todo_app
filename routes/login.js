import express from 'express'
import { loginHandler } from '../controllers/logInSignup.js';
const loginRouter = express.Router();
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

loginRouter.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
})
loginRouter.post('/', loginHandler)
export default loginRouter;