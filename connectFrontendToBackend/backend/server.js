import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready!")
// })

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: "Chair",
            price: 2000
        },
        {
            id: 2,
            name: "Table",
            price: 5000
        },
        {
            id: 3,
            name: "Almira",
            price: 11000
        },
        {
            id: 4,
            name: "TV",
            price: 9500
        }
    ]
    res.send(products) 
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Server at http://localhost:${port}`)
})
