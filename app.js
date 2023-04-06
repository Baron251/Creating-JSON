const express = require("express")
const app = express()
const PORT = 4002;
const log = console.log;


app.get("/", (req, res) => {
    try {
        res.sendFile(`${__dirname}/api/answer.json`)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }
})



app.listen(PORT, log (`Server is running on PORT: ${PORT}`))