const express = require('express');
const db = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getTask()
        .then(task => res.status(200).json(task))
        .catch(err => res.status(500).json({mes:"Server Error", err}))
})

router.get('/:id', (req, res) => {
    db.findById(req.params.id)
        .then(task => res.status(200).json(task))
        .catch(err => res.status(500).json({mes:"Server Error", err}))
})

router.post('/', (req, res) => {
    db.addTasks(req.body)
        .then(task => res.status(201).json(task))
        .catch(err => res.status(500).json({mes:"Server Error", err}))
})

module.exports = router;