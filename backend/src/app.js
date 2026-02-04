const express = require("express")
const noteModel = require("../models/data.model")
const cors = require("cors")
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// post api
app.post("/api/notes", async (req, res) => {
    const { product, image, amount, price } = req.body
    const note = await noteModel.create({
        product, image, amount, price
    })
    res.status(201).json({
        message: "creating the products",
        note
    })
})
// get api fetching data
app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find({})

    res.status(201).json({
        message: "fethcing the data",
        notes
    })
})
// delete api for deleting product
app.delete("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "product delted successfully"
    })
})
// updating the products with patch
app.patch("/api/notes/:indx", async (req, res) => {
    const id = req.params.indx
    const {amount, price} = req.body
    await noteModel.findByIdAndUpdate(id,{amount,price})
    res.status(200).json({
        message : "product updated"
    })
})
module.exports = app