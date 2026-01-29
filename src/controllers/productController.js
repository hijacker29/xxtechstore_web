const products = [
    { id: 1, name: "Laptop Gamer", price: 1200, stock: 5 },
    { id: 2, name: "Teclado Mecánico", price: 80, stock: 20 },
    { id: 3, name: "Monitor 4K", price: 400, stock: 8 }
];

exports.getAllProducts = (req, res) => {
    res.json(products);
};
