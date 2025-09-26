const express = require('express')
const cors = require('cors')
require('dotenv').config()

// App setup
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Hello from AI Question Generator Backend")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})