import { Router } from "express";
const router = Router();
import UserControllers from "..//controllers/user.controller";
router.post("/user", UserControllers.register);
router.get("/user", UserControllers.getAll);
export default router;
