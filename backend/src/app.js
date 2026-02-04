const express = require("express")
const noteModel = require("../models/data.model")
const app = express()
// middleware
app.use(express.json())

// post api
app.post("/api/notes", async (req, res) => {
    const { product, productimg, amount, price } = req.body
    const note = await noteModel.create({
        product, productimg, amount, price
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
        message : "fethcing the data",
        notes
    })
})
// delete api for deletinf product

module.exports = app