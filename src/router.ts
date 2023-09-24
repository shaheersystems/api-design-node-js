import { Router } from "express";

const router = Router();

/**
 * Prducts Routes
 */

router.get("/products", (req, res) => {
  res.json({ message: "Message" });
});

router.get("/products/:id", () => {});

router.put("/products/:id", () => {});

router.post("/products", () => {});

router.delete("/products/:id", () => {});

/**
 * Update Routes
 */

router.get("/updates", () => {});

router.get("/updates/:id", () => {});

router.put("/updates/:id", () => {});

router.post("/updates", () => {});

router.delete("/updates/:id", () => {});

/**
 * UpdatePoints Routes
 */

router.get("/update-points", () => {});

router.get("/update-points/:id", () => {});

router.put("/update-points/:id", () => {});

router.post("/update-points", () => {});

router.delete("/update-points/:id", () => {});

export default router;
