const CategoryModel = require("../category/model");
const ProductsModel = require("../products/model");
const VendorModel = require("./model");

const deleteVendorById = async (req, res) => {
  const id = req.params.id;
  try {
    const Vendor = await VendorModel.findByPk(id);
    if (Vendor) {
      await Vendor.destroy();
      res.send({
        error: false,
        message: "Vendor deleted successfully",
        data: [],
      });
    } else {
      res.send({
        error: true,
        message: `Vendor of id ${id} not found`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};
const getVendors = async (req, res) => {
  try {
    const Vendors = await VendorModel.findAll({
      include: [{ model: CategoryModel, as: "type" }],
    });
    res.send({ error: false, message: "Vendors retrieved", data: Vendors });
  } catch (error) {
    res.send(error.message);
  }
};
const getVendorProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductsModel.findAll({
      where: { vendorId: id },
      //include: [{ model: VendorModel, as: "vendor" }],
    });
    res.send(product);
  } catch (error) {
    res.send(error);
  }
};
const getVendor = async (req, res) => {
  const id = req.params.id;
  try {
    const Vendor = await VendorModel.findByPk(id, {
      include: [{ model: CategoryModel, as: "category" }],
    });
    if (Vendor) {
      res.send({
        error: false,
        message: "Vendor retrieved successfully",
        data: Vendor,
      });
    } else {
      res.send({
        error: true,
        message: `Vendor of id ${id} not found`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const createVendor = async (req, res) => {
  try {
    const existVendor = await VendorModel.findOne({
      where: { vendorName: req.body.vendorName },
    });
    if (existVendor) {
      res.send(`Vendor ${req.body.vendorName} already exists`);
    }
    const Vendor = await VendorModel.create(req.body);
    if (Vendor) {
      res.send("Vendor created successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    console.log(error);
    console.log(req.body);

    res.send(error.message);
  }
};
const updateVendorById = async (req, res) => {
  const id = req.params.id;
  const { vendorname, shopName, address, category } = req.body;
  try {
    const updated = await VendorModel.update(
      {
        vendorName: vendorname,
        shopName: shopName,
        address: address,
        category: category,
      },
      {
        where: { vendorId: id },
      }
    );
    if (updated) {
      res.send("Vendor updated successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {
  deleteVendorById,
  getVendors,
  getVendor,
  createVendor,
  updateVendorById,
  getVendorProducts,
};
