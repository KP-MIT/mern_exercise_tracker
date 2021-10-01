// create Router for user
const router = require('express').Router();
let User = require('../models/user.model');

// route incoming http get() request traffic on '/users/'

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// .find() is a mongoose method returns list of all users in MongoDB as a promise.

// route incoming http post request
router.route('/add').post((req, res) => {
    // create a new username instance
    const username = req.body.username;
    const newUser = new User({username});
  
  //save new user
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;