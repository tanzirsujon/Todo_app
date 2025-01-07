import { getUserAuth } from "../services/user.js";

function onlyLoggedUserHandler(req, res, next) {
    let userUid = req.cookies.uuid;
    if (!userUid) {
        return res.redirect('/signup');
    }
    let user = getUserAuth(userUid);
    if (!user) {
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

export default onlyLoggedUserHandler;