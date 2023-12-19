import express from "express";

import { isAdmin, requireLogIn } from "../middlewares/auth.js";
import {
  getAllCategories,
  createCategory,
  deleteCategory,
  getSingleCategory,
  updateCategory,
} from "../controllers/category.js";

const router = express.Router();

// create category
router.post("/create-category", requireLogIn, isAdmin, createCategory);

// get aLl category
router.get("/get-category", getAllCategories);

// single category
router.get("/single-category/:slug", getSingleCategory);

// update category
router.put("/update-category/:id", requireLogIn, isAdmin, updateCategory);

//delete category
router.delete("/delete-category/:id", requireLogIn, isAdmin, deleteCategory);

export default router;
