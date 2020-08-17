const express = require('express');
const router = express.Router();
const helper = require('../config/helpers');
const jwt = require('jsonwebtoken');


// LOGIN ROUTE
router.post('/login', [helper.hasAuthFields, helper.isPasswordAndUserMatch], (req, res) => {
    let token = jwt.sign({state: 'true', email: req.body.email, username: req.body.username}, helper.secret, {
        algorithm: 'HS512',
        expiresIn: '4h'
    });
    res.json({
        token: token,
        auth: true,
        email: req.email,
        username: req.username,
        fname: req.fname,
        lname: req.lname,
        photoUrl: req.photoUrl,
        userId: req.userId,
        type: req.type,
        role: req.role
    });
});

module.exports = router;
