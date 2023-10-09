const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

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

    // http://localhost:3000/api/products?search=chair

    if(req.query.search) {
        const filterProducts=products.filter((product) => product.name.includes(req.query.search));

        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})