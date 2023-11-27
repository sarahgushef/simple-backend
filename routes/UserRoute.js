import express from "express";

import {
  signupUser,
  getAllUsersDdata,
} from "../controllers/UserControllers.js";

const router = express.Router();

router.post("/users", signupUser);
router.get("/users", getAllUsersDdata);

export default router;
