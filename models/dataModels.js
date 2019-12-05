const mongoose = require("mongoose");

let DataSchema = new mongoose.Schema({
   class: String, 
   game: String,
   film: String,
   music: String
}, {
    _id: true,
    timestamps: true
});

let DataModel = mongoose.model("data", DataSchema);
module.exports = DataModel;