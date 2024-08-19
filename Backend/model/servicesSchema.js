const mongoose = require("mongoose")

const servicesSchema = new mongoose.Schema({
    iconUrl: String,
    service: String,
    detail: String
});

const ServicesData = mongoose.model("ServicesData", servicesSchema);

module.exports = ServicesData;