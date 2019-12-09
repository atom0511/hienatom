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
    let randomNumber = Math.floor(Math.random() * data.length);
    res.render("audioPage", { link_audio: data[randomNumber].audio, css: "/audio.css" });
    Router.get("/back", async (req, res) => {
        console.log("get /back");
        if (randomNumber === 0) {
            randomNumber = data.length - 1;
        } else {
            randomNumber = randomNumber - 1;
        }
        res.render("audioPage", { link_audio: data[randomNumber].audio, css: "/audio.css" });
    })
    Router.get("/next", async (req, res) => {
        console.log("get /next");
        if (randomNumber === data.length - 1) {
            randomNumber = 0;
        } else {
            randomNumber = randomNumber + 1;
        }
        res.render("audioPage", { link_audio: data[randomNumber].audio, css: "/audio.css" });
    })
})


module.exports = Router;