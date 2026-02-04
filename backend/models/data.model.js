const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    product: String,
    image: String,
    amount: Number,
    price: Number
})

const noteModel = mongoose.model("notes", noteSchema)

module.exports = noteModel