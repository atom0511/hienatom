const DataModel = require("../models/dataModels");

async function createData(data) {
    let newData = DataModel(data);
    await newData.save((err, data) => {
        if (err) {
            console.log("err create data: ", err);
        } else {
            console.log("creat data successful");
        }
    });
}

async function readAllData() {
    let allData = await DataModel.find({});
    let data = [];
    allData.forEach(element => {
        if (element.availableSizes.length > 0) data.push(element);
    });
    return allData;
}

async function updateData(data) {
    await DataModel.findById({ _id: data._id });
    await DataModel.updateOne({}, data, (err, data) => {
        if (err) {
            console.log("err update data: ", err);
        } else {
            console.log("update data successful");
        }
    });
}

async function deleteData(data) {
    await DataModel.deleteOne({ _id: data._id }, (err, data) => {
        if (err) {
            console.log("err delete data: ", err);
        } else {
            console.log("delete data successful");
        }
    });
}

module.exports = {
    createData: createData,
    readData: readAllData,
    updateData: updateData,
    deleteData: deleteData
};