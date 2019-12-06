const Router = require("express").Router();

const {
    createData,
    readData,
    updateData,
    deleteData
} = require("../controllers/dataController");

Router.get("/game", async (req, res) => {
    console.log("get /game");
    let data = await readData();
    let randomData = data[Math.floor(Math.random() * data.length)];
    res.render("gamePage", { link_game: randomData.game, css: "/game.css" });
})

module.exports = Router;