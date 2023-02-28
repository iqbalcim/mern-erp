import express from "express";
import { getUser, getUsers } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/users", getUsers);

export default router;
