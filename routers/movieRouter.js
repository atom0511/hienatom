const Router = require("express").Router();

const {
    createData,
    readData,
    updateData,
    deleteData
} = require("../controllers/dataController");

Router.get("/movie", async (req, res) => {
    console.log("get /movie");
    let data = await readData();
    let randomData = data[Math.floor(Math.random() * data.length)];
    res.render("moviePage", { css: "/movie.css" });
})

module.exports = Router;