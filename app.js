import express from "express"

const app = express()

app.use(express.json())

app.get('/user', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log("listening to server");
})