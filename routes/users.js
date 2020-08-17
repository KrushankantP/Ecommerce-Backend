const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/**
 * ROLE 777 = ADMIN
 * ROLE 555 = CUSTOMER
 */

// GET users listing.
router.get('/', function (req, res) {
    database.table('users')
        .withFields([ 'username' , 'email', 'fname', 'lname', 'age', 'role', 'id' ])
        .getAll().then((list) => {
        if (list.length > 0) {
            res.json({users: list});
        } else {
            res.json({message: 'NO USER FOUND'});
        }
    }).catch(err => res.json(err));
});


// GET ONE USER MATCHING ID
router.get('/:userId', (req, res) => {
    let userId = req.params.userId;
    database.table('users').filter({id: userId})
        .withFields([ 'username', 'email','fname', 'lname', 'age', 'role', 'id' ])
        .get().then(user => {
        if (user) {
            res.json({user});
        } else {
            res.json({message: `NO USER FOUND WITH ID : ${userId}`});
        }
    }).catch(err => res.json(err) );
});

// GET ONE USER WITH EMAIL MATCH
router.get('/validate/:email', (req, res) => {
    let email = req.params.email;
    database.table('users').filter({email: email})
        .get()
        .then(user => {
            if (user) {
                res.json({user: user, status: true});
            } else {
                res.json({status: false, user: null});
            }
        })
        .catch(err => res.json(err));
});

module.exports = router;
