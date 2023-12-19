import express from "express";
import formidable from "express-formidable";

import { isAdmin, requireLogIn } from "../middlewares/auth.js";
import {
  brainTreePayment,
  braintreeToken,
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  productCategory,
  productCount,
  productFilters,
  productList,
  productPhoto,
  realtedProduct,
  searchProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

// Admin restricted
router.post(
  "/create-product",
  requireLogIn,
  isAdmin,
  formidable(),
  createProduct
);
router.put(
  "/update-product/:pid",
  requireLogIn,
  isAdmin,
  formidable(),
  updateProduct
);

// get products
router.get("/get-product", getAllProducts);

//single product
router.get("/get-product/:slug", getSingleProduct);

//get photo
router.get("/product-photo/:pid", productPhoto);

//delete product
router.delete("/delete-product/:pid", deleteProduct);

// filter product
router.post("/product-filters", productFilters);

//product count
router.get("/product-count", productCount);

//product per page
router.get("/product-list/:page", productList);

//search product
router.get("/search/:keyword", searchProduct);

//similar product
router.get("/related-product/:pid/:cid", realtedProduct);

//category wise product
router.get("/product-category/:slug", productCategory);

//payments routes
//token
router.get("/braintree/token", braintreeToken);

//payments
router.post("/braintree/payment", requireLogIn, brainTreePayment);

export default router;
