const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product')
const path = require('path')
const app = express()
const port = 3000

main().catch(e => console.log(e))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
        .then(() => {
            console.log("Mongoose Connection Established")
        })
        .catch((e) => {
            console.log("Mongoose Connection Error!!", e)
        })
}

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})