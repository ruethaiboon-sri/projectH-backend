import express from "express";

//schema
import User from "../models/user-model.js";

//controller
// import getAllUsers from "../controllers/users-controller.js";
import { createUser } from "../controllers/users-register-controller.js";
import { login } from "../controllers/user-login-controller.js";
// import { auth } from "../controllers/authenticate-service.js";

const UserRoutes = express.Router();

// UserRoutes.get("/", () => getAllUsers);

UserRoutes.post("/register", createUser);
UserRoutes.post("/login", login);


export default UserRoutes;
