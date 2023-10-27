const mongoose = require('mongoose')
const Product = require('./models/product')

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


// const p = new Product({
//     name: "Grapefruit",
//     price: 0.99,
//     category: "fruit"
// })

// p.save().then(p => {console.log(p)}).catch(e => {console.log(e)})

const seedProducts = [
    {
        name: "Blutwurst",
        price: 2.99,
        category: "meat"
    },
    {
        name: "Tomate",
        price: 0.49,
        category: "fruit"
    },
    {
        name: "Avocado",
        price: 4.99,
        category: "fruit"
    },
    {
        name: "Brokkoli",
        price: 0.99,
        category: "vegetable"
    },
    {
        name: "Milch",
        price: 1,
        category: "dairy"
    },
    {
        name: "Joghurt - Schoko",
        price: 1.29,
        category: "dairy"
    },
    {
        name: "BiFi",
        price: 1.59,
        category: "meat"
    },
    {
        name: "Zucchini",
        price: 1.19,
        category: "vegetable"
    }
]

Product.insertMany(seedProducts).then(p => console.log(p)).catch(e => console.log(e))