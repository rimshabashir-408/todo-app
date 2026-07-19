import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 5000

// Test route
app.get('/', (req, res) => {
  res.send('Server chal raha hai ✅')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})