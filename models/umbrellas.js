const mongoose = require("mongoose")
const umbrellasSchema = mongoose.Schema({
itemname: String,
quantity: Number,
price: String
})
module.exports = mongoose.model("umbrellas",
umbrellasSchema)