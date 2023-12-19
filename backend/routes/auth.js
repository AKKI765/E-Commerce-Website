import express from "express";

import { isAdmin, requireLogIn } from "../middlewares/auth.js";
import {
  register,
  login,
  test,
  forgotPassword,
  updateProfile,
  getOrders,
  getAllOrders,
  orderStatus,
} from "../controllers/auth.js";


const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.get("/test", requireLogIn, isAdmin, test);
router.put("/profile", requireLogIn, updateProfile);

// User auth
router.get("/user-auth", requireLogIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// Admin auth
router.get("/admin-auth", requireLogIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});


router.get("/orders", requireLogIn, getOrders);
router.get("/all-orders", requireLogIn, isAdmin, getAllOrders);
router.put("/order-status/:orderId", requireLogIn, isAdmin, orderStatus);

export default router;
