const express = require("express");
const packageController = require("../controllers/package.controller");

const router = express.Router();
router.post("/", packageController.createPackage);
router.get("/all", packageController.getAllPackages);
router.get("/id", packageController.getPackageById);
router.patch("/", packageController.updatePackage);
router.delete("/", packageController.deletePackage);

module.exports = router;
