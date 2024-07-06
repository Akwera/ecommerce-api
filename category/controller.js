const VendorModel = require("../vendor/model");
const CategoryModel = require("./model");
const deleteCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await CategoryModel.findByPk(id);
    if (category) {
      await category.destroy();
      res.send({
        error: false,
        message: "category deleted successfully",
        data: [],
      });
    } else {
      res.send({
        error: true,
        message: `category of id ${id} not found`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};
const getAllCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findAll();
    res.send({ error: false, message: "categories retrieved", data: category });
  } catch (error) {
    res.send(error.message);
  }
};
const getCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await CategoryModel.findByPk(id);
    if (category) {
      res.send({
        error: false,
        message: "category retrieved successfully",
        data: category,
      });
    } else {
      res.send({
        error: true,
        message: `category of id ${id} not found`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await CategoryModel.create({
      categoryName: categoryName,
    });
    if (category) {
      res.send("category created successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
const updateCategoryById = async (req, res) => {
  const id = req.params.id;
  const { categoryid, categoryname } = req.body;
  try {
    const updated = await ProductsModel.update(
      {
        categoryName: categoryname,
      },
      {
        where: { categoryId: id },
      }
    );
    if (updated) {
      res.send("category updated successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
module.exports = {
  deleteCategoryById,
  getAllCategory,
  getCategory,
  createCategory,
  updateCategoryById,
};
