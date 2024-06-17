//endpoints 
const express = require("express");
//convert to json
const bodyParser = require("body-parser");
const {dbConnection, syncModels } = require("./connection")


require("dotenv").config();
//json response small
const compression = require("compression");
const authRoutes = require("./auth/routes");

 const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
const PORT = process.env.PORT

dbConnection.sync()
.then(() => {
    console.log("Database synchronized");
    syncModels()
})
.catch((error) => {
    console.error("Error synchronizing database:", error);
});



app.get("/", (req, res) => {
    res.send("<h1>Welcome Ninjas</h1>")
})
app.use("/api/v1/auth",authRoutes)
 app.listen(PORT, () => {
    console.log("app running on port:" + PORT);
});