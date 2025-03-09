import express from "express";
import {deleteUser,getUser} from "../controller/userController.js";
import { verifyToken } from "../config/jwt.js";

const router = express.Router();

//router.get("/register", )
//router.get("/login", )
router.delete("/:id", verifyToken, deleteUser)
router.get("/:id", verifyToken, getUser)


export default router;