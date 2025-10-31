import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import {
  userProfile,
  adminDashboard,
  moderatorPanel,
} from "../controllers/protectedController.js";

const router = express.Router();

router.get("/user", verifyToken, authorizeRoles("User", "Admin", "Moderator"), userProfile);
router.get("/admin", verifyToken, authorizeRoles("Admin"), adminDashboard);
router.get("/moderator", verifyToken, authorizeRoles("Moderator", "Admin"), moderatorPanel);

export default router;
