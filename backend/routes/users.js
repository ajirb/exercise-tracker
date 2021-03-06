const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    console.log("find all users")
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    console.log("Add users")
    const username = req.body.username;
    console.log('username : '+username);
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch( err => res.status(400).json('Error: '+err))
});

module.exports = router;