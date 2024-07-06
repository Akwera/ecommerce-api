const { UPDATE } = require("sequelize/lib/query-types");
const { UserModel, ProductsModel } = require("./model");
const { dbConnection } = require("../connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.send("All fields are mandatory");
    }
    const user = await UserModel.findOne({
      where: { username },
    });
    //compare user password and hashed password

    if (
      user &&
      (await bcrypt.compare(req.body.password.toString(), user.password))
    ) {
      const accessToken = jwt.sign(
        {
          user: { username: user.userName, role: user.role, id: user.userId },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.status(200).send(accessToken);
    } else {
      res.status(400).send("email or password is not valid");
    }
  } catch (error) {
    res.send(error.message);
  }
};
const deleteUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByPk(id);
    if (user) {
      await user.destroy();
      res.send({
        error: false,
        message: "user deleted successfully",
        data: [],
      });
    } else {
      res.send({
        error: true,
        message: `user of id ${id} not registered`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.send({ error: false, message: "users retrieved", data: users });
  } catch (error) {
    res.send(error.message);
  }
};
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findByPk(id);
    if (user) {
      res.send({
        error: false,
        message: "user retrieved successfully",
        data: user,
      });
    } else {
      res.send({
        error: true,
        message: `user of id ${id} not registered`,
        data: [],
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const { username, password, role, phone } = req.body;
  try {
    const updated = await UserModel.update(
      {
        userName: username,
        password: password,
        role: role,
        phoneNumber: phone,
      },
      {
        where: { userId: id },
      }
    );
    if (updated) {
      res.send("user updated successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};
const register = async (req, res) => {
  //console.log(req.body);
  try {
    const passwordString = req.body.password.toString();
    const hashedPassword = await bcrypt.hash(passwordString, 10);
    const userdata = await UserModel.create({
      userName: req.body.username,
      password: hashedPassword,
      role: req.body.role,
      phoneNumber: req.body.phone,
    });

    if (userdata) {
      res.send("user created successfully");
    } else {
      res.send("an error occured");
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  login,
  register,
  getUserById,
  deleteUserById,
  getUsers,
  updateUserById,
};
