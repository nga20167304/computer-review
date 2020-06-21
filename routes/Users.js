const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })
var md5 = require('md5')
const util = require('util');
require('util.promisify').shim();
var fs = require('fs')
const unlinkAsync = util.promisify(fs.unlink);

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',upload.single('image'), (req, res) => {

  console.log('req file ',req.file);
  if(req.file){

    //link image for window
    req.body.image = '/' + req.file.path.split('\\').slice(1).join('/');

    //link image for mac
    // req.body.image = '/' + req.file.path.split('/').slice(1).join('/');
  }else{
    req.body.image = '/uploads/0e0a2b029b5b3116500043d49c2d2659';
  }
  console.log('req body img ',req.body.image);
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {

    if (!user) {
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password),
        image: req.body.image,
      }

      User.create(userData)
          .then(user => {
            res.json({errs: []});
          })
          .catch(err => {
            res.send('error: ' + err);
          })
    } else {
      if(req.file) unlinkAsync(req.file.path);
      res.json({errs: [user.email + ' existed!']});
    }
  }).catch(err => {
    res.send('error: ' + err);
  })
})

users.put('/update', upload.single('image'), (req, res) => {

  const userData = {
    id: req.body.id,
  }

  console.log('req file ',req.file);
  if(req.file){
    //link image for window
    req.body.image = '/' + req.file.path.split('\\').slice(1).join('/');

    //link image for mac
    // req.body.image = '/' + req.file.path.split('/').slice(1).join('/');
  }
  console.log('req body img ',req.body.image);

  if(req.body.name) {
    userData['name'] = req.body.name;
  }
  if(req.body.image) {
    userData['image'] = req.body.image;
  }
  if(req.body.password) {
    userData['password'] = md5(req.body.password);
  }

  User.update(userData, {where: {id: userData.id}})
      .then(result => {
        User.findOne({
          where: {
            id: userData.id
          }
        }).then(user => {
          if (user) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token);
          } else {
            res.send('User does not exist')
          }
        })
            .catch(err => {
              res.send('error: ' + err)
            })
      })
      .catch(err => {
        if(req.file) unlinkAsync(req.file.path);
        res.send('error: ' + err);
      })
})

users.post('/login', (req, res) => {
    // TODO: handle Token
    console.log(req.body.token)
    if (req.body.token) {
        try {
            const verify = jwt.verify(req.body.token, process.env.SECRET_KEY)
            if (verify) {
                res.send(true)
                return true
            }
        } catch (e) {
            console.error(e)
            res.send(false)
            return false
        }
        return false
    }

  // No Token
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {

      if(md5(req.body.password) === user.password){
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.send(token);
        // res.send(user);
      }else {
        res.json({errs: ['Wrong email or password']});
      }
    } else {
      res.json({errs: ['Wrong email or password']});
    }
  }).catch(err => {
    res.status(400).json({ error: err })
  })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('User does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})

users.get('/', (req, res) => {
  User.findAll({include: [{all: true}]})
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('User does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})

users.delete('/:userId', (req, res) => {
  User.destroy({where: {id: req.params.userId}})
      .then(number => {
        if (number) {
          res.json({mess: 'delete success'})
        } else {
          res.send('User does not exist')
        }
      })
})

module.exports = users
