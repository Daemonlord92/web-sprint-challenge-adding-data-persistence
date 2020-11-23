const express = require("express")
const db = require("./model")

const router = express.Router()

router.get("/", (req, res) => {
    db.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ mes: "Server Error", err})
        })
})

router.get('/:id', (req, res) => {
    db.getProjectsById(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ mes:"Server Error", err})
        })
})

router.post('/', (req, res) => {
    db.insertProjects(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ mes:"Server Error", err})
        })
})

module.exports = router;