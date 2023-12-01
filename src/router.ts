import { Router } from "express";

import { body, validationResult } from "express-validator";

const router = Router();

/**
 * Prducts Routes
 */

router.get("/products", (req, res) => {
  res.json({ message: "Message" });
});

router.get("/products/:id", () => {});

router.put("/products/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  }
});

router.post("/products", (req, res) => {});

router.delete("/products/:id", (req, res) => {});

/**
 * Update Routes
 */

router.get("/updates", (req, res) => {});

router.get("/updates/:id", (req, res) => {});

router.put("/updates/:id", (req, res) => {});

router.post("/updates", (req, res) => {});

router.delete("/updates/:id", (req, res) => {});

/**
 * UpdatePoints Routes
 */

router.get("/update-points", () => {});

router.get("/update-points/:id", () => {});

router.put("/update-points/:id", () => {});

router.post("/update-points", () => {});

router.delete("/update-points/:id", () => {});

export default router;
