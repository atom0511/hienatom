const mongoose = require("mongoose");

let DataSchema = new mongoose.Schema({
   class: String, 
   game: String,
   movie: String,
   audio: String
}, {
    _id: true,
    timestamps: true
});

let DataModel = mongoose.model("data", DataSchema);
module.exports = DataModel;