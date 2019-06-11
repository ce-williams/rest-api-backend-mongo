const express = require('express')
const router = express.Router()
const User = require('../models/user')
// const path = require('path');


// Getting All
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// Getting one
router.get('/:id', getUser, (req, res) => {
    res.send(res.user.firstname)
});

// Creating one
router.post('/', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
});

// Deleting one user
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: "deleted user" })
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
});


// Middleware

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user === null) {
            return res.status(404).json({ message: "Cannot find user" })
        }
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
    res.user = user
    next()
}


module.exports = router