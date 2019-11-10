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
    res.status(200).json({
        message: 'Handling GET requests to /users/{id}',
        id: id
    });
});

router.patch('/:userID', (req, res, next) => {
    const id = req.params.userID;
    res.status(200).json({
        message: 'Handling PATCH requests to /users/{id}. Updated user',
        id: id
    });
});

router.delete('/:userID', (req, res, next) => {
    const id = req.params.userId;
    res.status(200).json({
        message: 'Handling DELETE requests to /users/{id}. Deleted user',
        id: id
    });
});

module.exports = router;
