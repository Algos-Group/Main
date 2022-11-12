const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY

module.exports = {
    registerUser: async(req, res) => {
        try {
            const checkEmail = await User.findOne({email: req.body.email })
            if (checkEmail) {
                res.status(400).json({ errors: { email: { message: 'Email in use' } } })
            } else {
                    const newUser = await User.create(req.body)
                    const payload = { _id: newUser._id, email: newUser.email, username:newUser.username }
                    const token = jwt.sign(payload, SECRET)
                    console.log(newUser)
                    res.cookie('usertoken', token, { expires: new Date(Date.now() + 900000) })
                    .json({ successMessage: 'usertoken: ', user: payload })
                } 
            }catch(err) {
                console.log("the error is here")
                res.status(400).json(err)
            }
    },
     getAllUsers: (req, res) => {
        User.find()
            .then(user =>
                res.json(user))
            .catch(err => console.log(err))
    },

    loginUser: async (req, res) => {
        const user = await User.findOne({email: req.body.email});
        console.log("Logging in" + user)
        try {
            if (!user) {
                res.status(400).json({ errors: 'Email not found' })
            } else {
                const validPassword = await bcrypt.compare(req.body.password, user.password)
                if (!validPassword) {
                    res.status(400).json({ errors: 'Invalid email/password' })
                } else {
                    const payload = { _id: user._id, email: user.email, username:user.username }
                    const token = jwt.sign(payload, SECRET)
                    res.cookie('usertoken', token, { expires: new Date(Date.now() + 900000) })
                    .json({ successMessage: 'usertoken: ', user: payload })
                }
            }
        } catch (err) {
            res.status(400).json({ errors: 'oops something when wrong in login' })
        }
    },

    updateUser: (req, res) => {
        User.updateOne({_id: req.params.id}, req.body, {new: true, runValidators:true})
            .then(updatedUser => res.json(updatedUser))
            .catch((err) => {res.status(400).json(err)})
    },

    getOneUser: (req, res) => {
        User.findOne({
                _id: req.params.id
            })
            .then(thisUsr => res.json(thisUsr))
            .catch(err => res.json(err))
    },

    getLogged: async (req, res) => {
        try {
            const user = jwt.verify(req.cookies.userToken, SECRET);
            const currentUser = await Model.findOne({ _id: user._id });
            res.json(currentUser);
        } catch (error) {
            res.status(400).json({ errors: 'failed to get logged in user' })
        }
    },

    logOutUser: (req, res) => {
        res.clearCookie('userToken')
        res.json({success:'User logged out'})
    }

}