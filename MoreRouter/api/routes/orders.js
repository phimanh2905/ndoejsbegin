const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get request to /orders'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'handling post request to /orders',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
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

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'update order'
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'delete order',
        orderId: req.params.orderId
    });
});



module.exports = router;