const Router = require("express").Router();

const {
    createData,
    readData,
    updateData,
    deleteData
} = require("../controllers/dataController");

Router.get("/audio", async (req, res) => {
    console.log("get /audio");
    let data = await readData();
    let randomData = data[Math.floor(Math.random() * data.length)];
    res.render("audioPage", { link_audio: randomData.audio, css: "/audio.css" });
})

module.exports = Router;