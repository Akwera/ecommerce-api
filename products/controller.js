const VendorModel = require("../vendor/model");
const   ProductsModel = require("./model")
const deleteProductById = async (req, res) => {
    const id = req.params.id;
    try {
      const product = await ProductsModel.findByPk(id);
      if (product) {
        await product.destroy();
        res.send({
          error: false,
          message: "product deleted successfully",
          data: [],
        });
      } else {
        res.send({
          error: true,
          message: `product of id ${id} not found`,
          data: [],
        });
      }
    } catch (error) {
      res.send(error.message);
    }
  };
  const getProducts = async (req, res) => {
    try {
      const products = await ProductsModel.findAll({include:[{model:VendorModel,as:"vendor"}]});
      res.send({ error: false, message: "products retrieved", data: products });
    } catch (error) {
      res.send(error.message);
    }
  };
  const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
      const product = await ProductsModel.findByPk(id);
      if (product) {
        res.send({
          error: false,
          message: "product retrieved successfully",
          data: product,
        });
      } else {
        res.send({
          error: true,
          message: `product of id ${id} not found`,
          data: [],
        });
      }
    } catch (error) {
      res.send(error.message);
    }
  };
  
  const createProduct = async (req, res) => {
    const {
    
      productName,
      category_name,
      categoryId,
      measuringUnit,
      vendorId,
      quantityAvailable,
    } = req.body;
    try {
      const product = await ProductsModel.create({
        productName: productName,
        category_name: category_name,
        categoryId: categoryId,
        measuringUnit: measuringUnit,
        vendorId: vendorId,
        quantityAvailable: quantityAvailable,
      });
      if (product) {
        res.send("product created successfully");
      } else {
        res.send("an error occured");
      }
    } catch (error) {
      res.send(error.message);
    }
  };
  const updateProductById = async (req, res) => {
    const id = req.params.id;
    const {
      productid,
      productname,
      categoryname,
      categoryid,
      measuringunit,
      vendorid,
      quantityavailable,
    } = req.body;
    try {
      const updated = await ProductsModel.update(
        {
          productName: productname,
          category_name: categoryname,
          category_id: categoryid,
          measuring_unit: measuringunit,
          vendor_id: vendorid,
          quantity_available: quantityavailable,
        },
        {
          where: { productId: id },
        }
      );
      if (updated) {
        res.send("product updated successfully");
      } else {
        res.send("an error occured");
      }
    } catch (error) {
      res.send(error.message);
    }
};
module.exports = {
  
    deleteProductById,
    getProducts,
    getProduct,
    createProduct,
    updateProductById,
  };