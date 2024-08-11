const { Package } = require("../models");
const { successResponse, errorResponse } = require("../helper/response");

// Create a new package
exports.createPackage = async (req, res) => {
  try {
    const { name, description, price, additionalServices } = req.body;

    const newPackage = await Package.create({
      name,
      description,
      price,
      additionalServices,
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
  try {
    const { id } = req.body;
    const package = await Package.findByPk(id);

    if (!package) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    return successResponse(res, {
      data: package,
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
  try {
    const { id, name, description, price, additionalServices } = req.body;

    const package = await Package.findByPk(id);
    if (!package) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    package.name = name || package.name;
    package.description = description || package.description;
    package.price = price || package.price;
    package.additionalServices =
      additionalServices || package.additionalServices;

    await package.save();

    return successResponse(res, {
      data: package,
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
  try {
    const { id } = req.body;

    const package = await Package.findByPk(id);
    if (!package) {
      return errorResponse(res, {
        statusCode: 404,
        message: "Package not found.",
      });
    }

    await package.destroy();

    return successResponse(res, {
      data: package,
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
