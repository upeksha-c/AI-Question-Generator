const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv");
const aiQuestionRoutes = require('./routes/aiQuestionRoutes')

// Load environment variables from .env file
dotenv.config();
// App setup
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Hello from AI Question Generator Backend")
})
// Routes for AI question generation
app.use('/api/generate-questions', aiQuestionRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})