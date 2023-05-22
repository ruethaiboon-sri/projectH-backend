import express from "express";
import { getAllData, deleteCard, getUserData, createActivity } from "../controllers/activities-controller.js";
import { auth } from "../controllers/authenticate-service.js";

//controllers
const ActivityRoutes = express.Router();

ActivityRoutes.delete("/delete/:id", deleteCard);

// VVVVVVVVVV Add by Bonn VVVVVVVVVV
ActivityRoutes.get("/userdata", auth,  getUserData);

ActivityRoutes.post("/add-activity", auth, createActivity);

export default ActivityRoutes;
