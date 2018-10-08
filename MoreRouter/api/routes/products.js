const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'handling post request to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you pass an id'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'update product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'delete product'
    });
});



module.exports = router;