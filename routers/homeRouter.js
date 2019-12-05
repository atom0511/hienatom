const Router = require("express").Router();

const {
    createData,
    readData,
    updateData,
    deleteData
} = require("../controllers/dataController");

Router.get("/", (req, res) => {
    console.log("get / ");
    res.render("homePage");
})