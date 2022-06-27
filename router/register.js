const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
router.post('/', async (req, response) => {

  var salt;
  bcrypt.genSalt(5).then(res => {
    console.log('salt', res)
    salt = res
    if (salt !== undefined) {
      bcrypt.hash(req.body.password, salt).then(res => {
        console.log("hashed", res)
        user = new User({ name: req.body.name, email: req.body.email, password: req.body.password })
        user.save().then(res => {
          console.log("res", res)
          response.json({
            status: true, message: 'Record inserted...'

          })
        }).catch(error => {
          console.log("error", error)
        });
      }).catch(error => {
        console.log("error", error)
      })
    }
  }).catch(error => {
    console.log('error', error)
  })


})
router.get('/', (req, res) => {
  User.find(function (error, result) {
          
      if (error) {
          return res.json({ status: false, message: 'Db fail....', error: error })
      }
      else {
          res.json({
              status: true, message: 'Db find Success...',
              result: result
          })
      }

  })
})
module.exports = router;