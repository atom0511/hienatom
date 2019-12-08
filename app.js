const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

let app = express();

app.engine("handlebars", handlebars({ defaultLayout: "defautLayout" }));
app.set("view engine", `handlebars`);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let dbLink = `mongodb://admin:CodesePre02@codedidungso.me:27017/codese-pre-02`;
mongoose.connect(dbLink, { useNewUrlParser: true }, err => {
    if (err) {
        console.log("err database");
    } else {
        console.log("Connected database");
    }
});
let port = 6061;
app.listen(6061, err => {
    if (err) {
        console.log("error app listen: ", err);
    } else {
        console.log(`App listen at ${port}`);
    }
});

const homeRouter = require("./routers/homeRouter");
const gameRouter = require("./routers/gameRouter");
const audioRouter = require("./routers/audioRouter");
const crazyPage = require("./routers/crazyRouter");
const moviePage = require("./routers/movieRouter");
app.use("/", homeRouter);
app.use("/", gameRouter);
app.use("/", audioRouter);
// app.use("/", crazyRouter);