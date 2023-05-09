import express from "express";
import loginController from "../controllers/loginController.js";
import aboutController from "../controllers/aboutPageController.js";

const route = express.Router();

// defining routes
route.get("/home", loginController);
route.get("/about", aboutController);

export default route;
