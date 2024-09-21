const { Package } = require("../models");
const { successResponse, errorResponse } = require("../helper/response");
const { validationResult } = require("express-validator");

// Create a new package
exports.createPackage = async (req, res) => {
  // set up validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, {
      statusCode: 400,
      message: "Validation error:",
      errors: errors.array(),
    });
  }

  try {
    const { name, description, price, capacity } = req.body;

    const newPackage = await Package.create({
      name,
      description,
      price,
      capacity,
    });

    return successResponse(res, {
      data: newPackage,
      statusCode: 201,
      message: "Package created successfully.",
    });
  } catch (error) {
    console.error("Error creating package:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while creating the package.",
    });
  }
};

// Get all packages
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.findAll();

    return successResponse(res, {
      data: packages,
      statusCode: 200,
      message: "Packages retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching packages:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while fetching packages.",
    });
  }
};

// Get a single package by ID
exports.getPackageById = async (req, res) => {
  // set up validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, {
      statusCode: 400,
      message: "Validation error:",
      errors: errors.array(),
    });
  }

  try {
    const { id } = req.body;
    const _package = await Package.findByPk(id);

    if (!_package) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    return successResponse(res, {
      data: _package,
      statusCode: 200,
      message: "Package retrieved successfully.",
    });
  } catch (error) {
    console.error("Error fetching package:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while fetching the package.",
    });
  }
};

// Update a package
exports.updatePackage = async (req, res) => {
  // set up validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, {
      statusCode: 400,
      message: "Validation error:",
      errors: errors.array(),
    });
  }

  try {
    const { id, name, description, price, additionalServices } = req.body;

    const _package = await Package.findByPk(id);
    if (!_package) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    _package.name = name || _package.name;
    _package.description = description || _package.description;
    _package.price = price || _package.price;

    await _package.save();

    return successResponse(res, {
      data: _package,
      statusCode: 200,
      message: "Package updated successfully.",
    });
  } catch (error) {
    console.error("Error updating package:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while updating the package.",
    });
  }
};

// Delete a package
exports.deletePackage = async (req, res) => {
  // set up validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorResponse(res, {
      statusCode: 400,
      message: "Validation error:",
      errors: errors.array(),
    });
  }

  try {
    const { id } = req.params;

    const _package = await Package.findByPk(id);
    if (!_package) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    await _package.destroy();

    return successResponse(res, {
      data: _package,
      statusCode: 204,
      message: "Package deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting package:", error);
    return errorResponse(res, {
      statusCode: 500,
      message: "An error occurred while deleting the package.",
    });
  }
};
