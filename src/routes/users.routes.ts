import { Router } from "express";
import { getUsers, createUsers } from "../controllers/users.controller";

const router = Router();

router.route("/").post(createUsers);
router.route("/").get(getUsers);
// router.route("/:id").get(getUserById);

export default router;
