const express = require("express");
const {
  getPackageById,
  getAllPackages,
  updatePackage,
  deletePackage,
  createPackage,
} = require("../controllers/package.controller");
const {
  createPackageValidation,
  getIdValidation,
  updatePackageValidation,
} = require("../middleware/validator");
const isAuth = require("../middleware/authenticator");

const router = express.Router();
router.post("/", isAuth, createPackageValidation, createPackage);
router.get("/all", getAllPackages);
router.get("/:id", isAuth, getIdValidation, getPackageById);
router.patch("/", isAuth, updatePackageValidation, updatePackage);
router.delete("/:id", isAuth, getIdValidation, deletePackage);

module.exports = router;
