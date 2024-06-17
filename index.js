//endpoints 
const express = require("express");
//convert to json
const bodyParser = require("body-parser");

require("dotenv").config();
//json response small
const compression = require("compression");
const authRoutes = require("./auth/routes");

 const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
const PORT = process.env.PORT
app.get("/", (req, res) => {
    res.send("<h1>Welcome Ninjas</h1>")
})
app.use("/api/v1/auth",authRoutes)
 app.listen(PORT, () => {
    console.log("app running on port:" + PORT);
});