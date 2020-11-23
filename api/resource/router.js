const express = require('express');
const db = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json({ mes:"Server Error", err})
        })
})

router.get('/:id', (req, res) => {
    db.getResourcesById(req.params.id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => res.status(500).json({mes:"Server Error", err}))
})

router.post('/', (req, res) => {
    db.insertResources(req.body)
        .then(resource => res.status(201).json(resource))
        .catch(err => res.status(500).json({ mes:"Server Error", err}))
})

module.exports = router;