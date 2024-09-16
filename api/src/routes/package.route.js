const express = require("express");
const packageController = require("../controllers/package.controller");
const {
  createPackageValidation,
  getIdValidation,
  updatePackageValidation,
} = require("../middleware/validator");
const isAuth = require("../middleware/authenticator");

const router = express.Router();
router.post(
  "/",
  isAuth,
  createPackageValidation,
  packageController.createPackage
);
router.get("/all", packageController.getAllPackages);
router.get("/:id", isAuth, getIdValidation, packageController.getPackageById);
router.patch(
  "/",
  isAuth,
  updatePackageValidation,
  packageController.updatePackage
);
router.delete("/:id", isAuth, getIdValidation, packageController.deletePackage);

module.exports = router;
