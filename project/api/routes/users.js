const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /users'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /users'
    });
});

router.get('/:userID', (req, res, next) => {
    const id = req.params.userID;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed a normal ID',
            id: id
        });
    };
});

router.patch('/:userID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated user'
    });
});

router.delete('/:userID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted user'
    });
});

module.exports = router;
