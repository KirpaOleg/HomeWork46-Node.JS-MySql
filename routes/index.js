const express = require('express');
const multer = require('multer');
const router = express.Router();
const {creteNewUser} = require('../model/users');
const upload = multer();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), async(req, res) => {
  console.log(req.body);
  const result = await creteNewUser(req.body);
  res.send(`hello ${req.body.name}`);
});

module.exports = router;

