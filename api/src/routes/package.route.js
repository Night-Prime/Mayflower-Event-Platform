const express = require("express");
const packageController = require("../controllers/package.controller");
const {
  createPackageValidation,
  getIdValidation,
  updatePackageValidation,
} = require("../middleware/validator");
const isAuth = require("../middleware/authenticator");

const router = express.Router();
router.post("/", createPackageValidation, packageController.createPackage);
router.get("/all", packageController.getAllPackages);
router.get("/id", getIdValidation, packageController.getPackageById);
router.patch("/", updatePackageValidation, packageController.updatePackage);
router.delete("/:id", getIdValidation, packageController.deletePackage);

module.exports = router;
