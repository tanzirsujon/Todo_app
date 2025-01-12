import express from "express";
import dotenv from "dotenv";
import todoUdate_DelteRoutes from "./routes/update&delete.js";
import signupRouter from "./routes/signup.js";
import cookieParser from "cookie-parser";
import loginRouter from "./routes/login.js";
import conn from "./connection/dbConn.js";
import onlyLoggedUserHandler from "./middleware/auth.js";
import todoRoutes from "./routes/todo.js";

const app = express();

dotenv.config();
const Port = process.env.PORT | 3000;
const db_url = process.env.DB_URL;
conn(db_url);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/todo", onlyLoggedUserHandler, todoRoutes);
app.use("/todo/update", todoUdate_DelteRoutes);
app.get("/", (req, res) => {
  res.send("hello i am working🤚");
});

app.listen(Port, () => {
  console.log(`Server listening in http://localhost:${Port}/ `);
});
