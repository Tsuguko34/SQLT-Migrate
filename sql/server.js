import express, { json } from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"DeansOffice2023",
    database:"dots"
})

app.get("/documents", (req, res) => {
    const q = "SELECT * FROM documents"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(3001, () => {
    
})
