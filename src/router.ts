import { Router } from "express";

import { body } from "express-validator";
import { handleInputError } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import { allIPs, blockIPForUser } from "./handlers/analytics";

const router = Router();

/**
 * Prducts Routes
 */

router.get("/products", getProducts);

router.get("/products/:id", getOneProduct);

router.put(
  "/products/:id",
  body("name").isString(),
  handleInputError,
  updateProduct
);

router.post(
  "/products",
  body("name").isString(),
  handleInputError,
  createProduct
);

router.delete("/products/:id", deleteProduct);

/**
 * Update Routes
 */

router.get("/updates", (req, res) => {});

router.get("/updates/:id", (req, res) => {});

router.put(
  "/updates/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").optional().isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  handleInputError,
  (req, res) => {}
);

router.post(
  "/updates",
  body("title").exists(),
  body("body").exists().isString(),
  handleInputError,
  (req, res) => {}
);

router.delete("/updates/:id", (req, res) => {});

/**
 * UpdatePoints Routes
 */

router.get("/update-points", () => {});

router.get("/update-points/:id", () => {});

router.put(
  "/update-points/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  handleInputError,
  () => {}
);

router.post(
  "/update-points",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  handleInputError,
  () => {}
);

router.delete("/update-points/:id", () => {});

/**
 * IP routes
 */

router.get("/ips", allIPs);

router.post(
  "/ips",
  body("ip").exists().isString(),
  body("reason").optional().isString(),
  handleInputError,
  blockIPForUser
);

export default router;
