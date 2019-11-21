const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateLoginInput = require('../../validations/login');
const validateRegisterInput = require('../../validations/register');

router.get('/', (req, res) => {
    res.json('this is the users route');
})

router.get('/:user_name', (req, res) => {
    const { user_name } = req.params;
    User.findOne({ name: user_name })
    .then( user => {
        if(!user){
            res.status(404).json({err: 'user not found'});
        } else {
            res.json({name: user.name, id: user.id});
        }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid){
        return res.status(400).json(errors)
    }
    const { email, password } = req.body;

    User.findOne({ email })
    .then( user => {
        if(!user){
            res.status(404).json({err: 'user doesnt exist'})
        } else {
            bcrypt.compare(password, user.password, (err, success) => {
                if(success) {
                    const payload = { id: user.id, name: user.name };
                    jwt.sign(
                      payload,
                      keys.secretOrKey,
                      { expiresIn: 3600 },
                      (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                      }
                    );
                }
            })
        }
    })
})

router.post('/register', (req,res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const { name, email, password } = req.body;
    User.findOne({ email })
    .then( user => {
        if(user){
            //user with that email already exists
            res.status(400).json( {err: 'user already exists'})
        } else {
            const newUser = new User({
                name,
                email,
                password
            });
            bcrypt.genSalt( 10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then( user => {
                        const payload = { id: user.id, name: user.name };
                        jwt.sign(
                            payload, 
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                })
                            }
                        )
                    })
                })
            })
        }
    })
});

module.exports = router;