import todoUser from "../models/todoUser.js";
import bcrypt from "bcrypt";

import { setUserAuth } from "../services/user.js";
export async function signupHandler(req, res) {
    try {
        const { username, email, password } = req.body;

        const saltRound = 11;
        const salting = await bcrypt.genSalt(saltRound);
        const hashPassword = await bcrypt.hash(password, salting);

        let newUser = new todoUser({ username, email, password: hashPassword });
        await newUser.save();
        res.status(201).json({ user: "created succesfully" });
    } catch (error) {
        console.log(`erroro in signup handler ${error}`);
        res.status(400).json({ "user": "bad request" });
    }
}

export async function loginHandler(req, res) {
    try {
        const { username, password } = req.body;
        const user = await todoUser.findOne({
            username,
        });
        if (!user) {
            return res.send("User or Password is not correct");
        }
        let isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.send("User or Password is not correct");
        }


        let sessionId = setUserAuth(user);
        res.cookie('uuid', sessionId);
        res.redirect('/todo');

    } catch (error) {
        console.log(`there is an error in loginHandler ${error}`)
        res.status(400).json({ "user": "bad request" });


    }
}
