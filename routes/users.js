const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

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

/**
 * ROLE 777 = ADMIN
 * ROLE 555 = CUSTOMER
 */
module.exports = router;
